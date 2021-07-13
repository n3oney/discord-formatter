import { formatChannel } from '../src/index';

test('correctly formats', () => {
    expect(formatChannel('103735883630395392')).toEqual('<#103735883630395392>');
});