import { formatTimestamp, TimestampStyle } from '../src/index';

let date = new Date();
let num = 0;

beforeEach(() => {
    date = new Date();
    num = Math.floor(Date.now() / 1000);
});

test('correctly formats default with Date', () => {
    const result = formatTimestamp(date);
    expect(result).toEqual(`<t:${Math.floor(date.getTime() / 1000)}:f>`);
});

test('correctly formats default with number', () => {
    const result = formatTimestamp(num);
    expect(result).toEqual(`<t:${num}:f>`);
});

test('correctly formats ShortTime with Date', () => {
    const result = formatTimestamp(date, TimestampStyle.ShortTime);
    expect(result).toEqual(`<t:${Math.floor(date.getTime() / 1000)}:t>`);
});

test('correctly formats ShortTime with number', () => {
    const result = formatTimestamp(num, TimestampStyle.ShortTime);
    expect(result).toEqual(`<t:${num}:t>`);
});

test('correctly formats LongTime with Date', () => {
    const result = formatTimestamp(date, TimestampStyle.LongTime);
    expect(result).toEqual(`<t:${Math.floor(date.getTime() / 1000)}:T>`);
});

test('correctly formats LongTime with number', () => {
    const result = formatTimestamp(num, TimestampStyle.LongTime);
    expect(result).toEqual(`<t:${num}:T>`);
});

test('correctly formats ShortDate with Date', () => {
    const result = formatTimestamp(date, TimestampStyle.ShortDate);
    expect(result).toEqual(`<t:${Math.floor(date.getTime() / 1000)}:d>`);
});

test('correctly formats ShortDate with number', () => {
    const result = formatTimestamp(num, TimestampStyle.ShortDate);
    expect(result).toEqual(`<t:${num}:d>`);
});

test('correctly formats LongDate with Date', () => {
    const result = formatTimestamp(date, TimestampStyle.LongDate);
    expect(result).toEqual(`<t:${Math.floor(date.getTime() / 1000)}:D>`);
});

test('correctly formats LongDate with number', () => {
    const result = formatTimestamp(num, TimestampStyle.LongDate);
    expect(result).toEqual(`<t:${num}:D>`);
});

test('correctly formats ShortDateTime with Date', () => {
    const result = formatTimestamp(date, TimestampStyle.ShortDateTime);
    expect(result).toEqual(`<t:${Math.floor(date.getTime() / 1000)}:f>`);
});

test('correctly formats ShortDateTime with number', () => {
    const result = formatTimestamp(num, TimestampStyle.ShortDateTime);
    expect(result).toEqual(`<t:${num}:f>`);
});

test('correctly formats LongDateTime with Date', () => {
    const result = formatTimestamp(date, TimestampStyle.LongDateTime);
    expect(result).toEqual(`<t:${Math.floor(date.getTime() / 1000)}:F>`);
});

test('correctly formats LongDateTime with number', () => {
    const result = formatTimestamp(num, TimestampStyle.LongDateTime);
    expect(result).toEqual(`<t:${num}:F>`);
});

test('correctly formats RelativeTime with Date', () => {
    const result = formatTimestamp(date, TimestampStyle.RelativeTime);
    expect(result).toEqual(`<t:${Math.floor(date.getTime() / 1000)}:R>`);
});

test('correctly formats RelativeTime with number', () => {
    const result = formatTimestamp(num, TimestampStyle.RelativeTime);
    expect(result).toEqual(`<t:${num}:R>`);
});