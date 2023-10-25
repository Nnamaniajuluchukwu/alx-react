/** Get the current year */
export function getFullYear() {
    const year = new Date();
    return (year.getFullYear());
}

/**
 * This function accepts a Boolean argument and returns
 * data based on the state of the parameter.
 * @param {Boolean} isIndex 
 * @returns if false: Holberton School main dashboard,
 * if true: Holberton School
 */
export function getFooterCopy(isIndex) {
    if (isIndex) return 'Holberton School';
    else return 'Holberton School main dashboard';
}

/** return a html string as notification. */
export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}
