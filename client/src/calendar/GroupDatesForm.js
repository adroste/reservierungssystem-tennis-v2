import { Button, Checkbox, Radio } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { appContext } from '../AppContext';
import classNames from 'classnames/bind';
import styles from './GroupDatesForm.module.css';

const cn = classNames.bind(styles);

const defaultRepeatValuesMap = {
    1: 'Täglich',
    7: 'Wöchentlich',
    14: '2-Wöchentlich',
};

export function GroupDatesForm({
    courtId,
    currentGroupDates,
    date,
    defaultAddCount = 2,
    disabled = false,
    onGroupDatesChange,
    repeatValuesMap = defaultRepeatValuesMap,
    today,
    unavailableDates,
}) {
    const { courts, config: { reservationDaysInAdvance } } = useContext(appContext);

    const [repeatValue, setRepeatValue] = useState(0);
    const [visibleDates, setVisibleDates] = useState([]);
    const [selectedDates, _setSelectedDates] = useState([]);

    const courtDisabledFromTil = useMemo(() =>
        (courts.find(c => c.courtId === courtId))?.disabledFromTil, [courts, courtId]);

    const checkIfNotAvailable = useCallback(date => (
        date.isAfter(today.add(reservationDaysInAdvance, 'day'), 'day')
        || (courtDisabledFromTil && date.isBetween(courtDisabledFromTil[0], courtDisabledFromTil[1], 'day', '[]'))
        || (unavailableDates && unavailableDates.some(d => date.isSame(d, 'day')))
    ), [courtDisabledFromTil, today, reservationDaysInAdvance, unavailableDates]);

    const dates = useMemo(() => {
        return visibleDates.map(d => ({
            date: d,
            checked: selectedDates.findIndex(gd => gd.isSame(d, 'day')) !== -1,
            reserved: currentGroupDates?.findIndex(gd => gd.isSame(d, 'day')) !== -1,
            past: d.isBefore(today, 'day'),
            notAvailable: checkIfNotAvailable(d),
        }));
    }, [checkIfNotAvailable, selectedDates, currentGroupDates, visibleDates, today]);

    const setSelectedDates = useCallback(selectedDates => {
        _setSelectedDates(_selectedDates => {
            let dates = selectedDates;
            if (typeof selectedDates === 'function')
                dates = selectedDates(_selectedDates);
            return dates.filter(d => !checkIfNotAvailable(d));
        });
    }, [checkIfNotAvailable]);

    useEffect(() => {
        onGroupDatesChange(selectedDates);
    }, [selectedDates, onGroupDatesChange]);

    // automatically unchecks unavailable dates if unavailableDates changes
    useEffect(() => setSelectedDates(s => s), [setSelectedDates]);

    useEffect(() => {
        let selectedDates = [date];
        let visibleDates = [date];

        if (currentGroupDates?.length > 1) {
            selectedDates = [...currentGroupDates];
            selectedDates.sort((a, b) => a.valueOf() - b.valueOf());
            let repeatValue = Number.MAX_SAFE_INTEGER;

            if (selectedDates.length > 1) {
                for (let i = 1; i < selectedDates.length; ++i) {
                    const diff = selectedDates[i - 1].diff(selectedDates[i], 'day');
                    repeatValue = Math.min(repeatValue, Math.abs(diff));
                }
            }

            repeatValue = repeatValue.toString();
            const allowedValues = Object.keys(repeatValuesMap);
            if (!allowedValues.includes(repeatValue))
                repeatValue = allowedValues[0];
            setRepeatValue(repeatValue);

            const first = selectedDates[0];
            const last = selectedDates[selectedDates.length - 1];
            const count = Math.abs(first.diff(last, 'day') / repeatValue);
            visibleDates = [];
            for (let i = 0; i <= count; ++i)
                visibleDates.push(first.add(i * repeatValue, 'day'));
        }

        setVisibleDates(visibleDates);
        _setSelectedDates(selectedDates);
    }, [currentGroupDates, date, repeatValuesMap]);

    const addDate = useCallback(() => {
        setVisibleDates(visibleDates => {
            const last = visibleDates[visibleDates.length - 1];
            const add = last.add(repeatValue, 'day');
            setSelectedDates(selectedDates => [...selectedDates, add]);
            return [...visibleDates, add];
        });
    }, [repeatValue, setSelectedDates]);

    const removeDate = useCallback(() => {
        setVisibleDates(visibleDates => {
            const last = visibleDates[visibleDates.length - 1];
            const reserved = currentGroupDates?.findIndex(gd => gd.isSame(last, 'day')) !== -1;
            if (visibleDates.length <= 1 || reserved)
                return visibleDates;
            setSelectedDates(selectedDates => selectedDates.filter(gd => !gd.isSame(last, 'day')));
            return visibleDates.slice(0, -1);
        });
    }, [currentGroupDates, setSelectedDates]);

    const handleRepeatValueChange = useCallback(e => {
        const newRepeatValue = e.target.value;
        setRepeatValue(newRepeatValue);

        const newDates = [date];
        if (newRepeatValue > 0) {
            for (let i = 1; i <= defaultAddCount; ++i)
                newDates.push(date.add(i * newRepeatValue, 'day'));
        }

        setVisibleDates(newDates);
        setSelectedDates(newDates);
    }, [date, defaultAddCount, setSelectedDates]);

    const handleCheckedChange = useCallback(e => {
        const index = e.target.value;
        const checked = e.target.checked;
        const date = visibleDates[index];

        setSelectedDates(selectedDates => {
            const newSelection = selectedDates.filter(gd => !gd.isSame(date, 'day'));
            if (checked)
                newSelection.push(date);
            newSelection.sort((a, b) => a.valueOf() - b.valueOf());
            return newSelection;
        });
    }, [visibleDates, setSelectedDates]);

    return (
        <div className={styles.wrapper}>
            <div>
                <Radio.Group
                    className={styles.repeatTypes}
                    value={repeatValue}
                    onChange={handleRepeatValueChange}
                    disabled={currentGroupDates?.length > 1 || disabled}
                    buttonStyle="solid"
                    size="small"
                >
                    <Radio.Button key={0} value={0}>Einzeltermin</Radio.Button>
                    {Object.keys(repeatValuesMap).map(value => (
                        <Radio.Button key={value} value={value}>{repeatValuesMap[value]}</Radio.Button>
                    ))}
                </Radio.Group>
            </div>

            {repeatValue > 0 &&
                <>
                    <div className={styles.dates}>
                        {dates.map(({ date, checked, reserved, past, notAvailable }, i) => (
                            <Checkbox
                                className={cn({
                                    unchecked: !checked,
                                    danger: (reserved && !checked) || notAvailable,
                                })}
                                key={date}
                                value={i}
                                disabled={past || notAvailable || disabled}
                                checked={checked}
                                onChange={handleCheckedChange}
                            >
                                <span className={styles.date}>{date.format('dd L')}</span>
                                {!notAvailable && !past && reserved && checked && <span className={styles.extra}> Aktuell reserviert</span>}
                                {!notAvailable && !past && reserved && !checked && <span className={styles.extra}> Wird storniert</span>}
                                {!notAvailable && past && <span className={styles.extra}> Bereits vergangen</span>}
                                {notAvailable && <span className={styles.extra}> Nicht verfügbar</span>}
                            </Checkbox>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            disabled={disabled}
                            icon={<PlusOutlined />}
                            onClick={addDate}
                        />
                        <Button
                            disabled={disabled}
                            icon={<MinusOutlined />}
                            onClick={removeDate}
                        />
                    </div>
                </>
            }
        </div>
    );
}