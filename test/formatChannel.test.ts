import { formatChannel } from '../src/discord-formatter';

test('correctly formats', () => {
    expect(formatChannel('103735883630395392')).toEqual('<#103735883630395392>');
});