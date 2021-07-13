export enum TimestampStyle {
    ShortTime = 'SHORT_TIME',
    LongTime = 'LONG_TIME',
    ShortDate = 'SHORT_DATE',
    LongDate = 'LONG_DATE',
    ShortDateTime = 'SHORT_DATE_TIME',
    LongDateTime = 'LONG_DATE_TIME',
    RelativeTime = 'RELATIVE_TIME',
}

export type ShortTimestampStyle = 't' | 'T' | 'd' | 'D' | 'f' | 'F' | 'R';

const styles: Record<TimestampStyle, ShortTimestampStyle> = {
    [TimestampStyle.ShortTime]: 't',
    [TimestampStyle.LongTime]: 'T',
    [TimestampStyle.ShortDate]: 'd',
    [TimestampStyle.LongDate]: 'D',
    [TimestampStyle.ShortDateTime]: 'f',
    [TimestampStyle.LongDateTime]: 'F',
    [TimestampStyle.RelativeTime]: 'R'
}

export function formatTimestamp(date: Date | number, style: TimestampStyle.ShortTime): `<t:${number}:t>`;
export function formatTimestamp(date: Date | number, style: TimestampStyle.LongTime): `<t:${number}:T>`;
export function formatTimestamp(date: Date | number, style: TimestampStyle.ShortDate): `<t:${number}:d>`;
export function formatTimestamp(date: Date | number, style: TimestampStyle.LongDate): `<t:${number}:D>`;
export function formatTimestamp(date: Date | number): `<t:${number}:f>`;
export function formatTimestamp(date: Date | number, style: TimestampStyle.ShortDateTime): `<t:${number}:f>`;
export function formatTimestamp(date: Date | number, style: TimestampStyle.LongDateTime): `<t:${number}:F>`;
export function formatTimestamp(date: Date | number, style: TimestampStyle.RelativeTime): `<t:${number}:R>`;

export function formatTimestamp(date: Date | number, style: TimestampStyle = TimestampStyle.ShortDateTime): `<t:${number}:${ShortTimestampStyle}>` {
    return `<t:${date instanceof Date ? Math.floor(date.getTime() / 1000) : date}:${styles[style]}>`;
}