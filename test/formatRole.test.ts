import { formatRole } from '../src/discord-formatter';

test('correctly formats', () => {
    expect(formatRole('165511591545143296')).toEqual('<@&165511591545143296>');
});