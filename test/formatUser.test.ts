import { formatUser } from '../src/discord-formatter';

test('correctly formats with no nickname', () => {
    expect(formatUser('80351110224678912')).toEqual('<@80351110224678912>');
});

test('correctly formats with nickname', () => {
    expect(formatUser('80351110224678912', true)).toEqual('<@!80351110224678912>');
});