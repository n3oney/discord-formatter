import { formatEmoji } from '../src/discord-formatter';

test('correctly formats normal', () => {
    expect(formatEmoji('mmLol', '216154654256398347')).toEqual('<:mmLol:216154654256398347>');
});

test('correctly formats animated', () => {
    expect(formatEmoji('b1nzy', '392938283556143104', true)).toEqual('<a:b1nzy:392938283556143104>');
});