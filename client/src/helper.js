export function findReservation(reservations, date, courtId) {
    if (!reservations)
        return null;

    for (let r of reservations)
        if (date.isBetween(r.from, r.to, 'hour', '[)') && courtId === r.courtId)
            return r;
    return null;
}

export function reservationOverlap(r1, r2) {
    return r1.from.isBefore(r2.to, 'hour')
        && r1.to.isAfter(r2.from, 'hour')
        && r1.courtId === r2.courtId;
}

export function getCourtName(courts, courtId) {
    return courts.find(c => c.courtId === courtId)?.name;
}

export function parseQuery(queryString) {
    const query = {};
    const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

export function visibleHoursToHoursArray([start, end]) {
    const hours = [];
    for (let i = parseInt(start); i < parseInt(end); ++i)
        hours.push(i);
    return hours;
}