import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear', () => {
    const nowYear = new Date();
    const year = nowYear.getFullYear();
    expect(getFullYear()).toBe(year);
});

test('returns properly when false or true', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test('check notification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
