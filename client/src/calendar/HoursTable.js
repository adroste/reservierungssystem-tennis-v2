import React from 'react';
import styles from './HoursTable.module.css';

export function HoursTable({
    visibleHours,
}) {
    return (
        <div className={styles.hoursTableWrapper}>
            <table className={styles.hoursTable}>
                <tbody>
                    {visibleHours.map(hour => (
                        <tr key={hour}>
                            <th>
                                <div className={styles.hour}>
                                    {hour} Uhr<br />
                                    <span className={styles.til}>bis {hour + 1} Uhr</span>
                                </div>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}