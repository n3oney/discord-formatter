import { formatRole } from '../src/index';

test('correctly formats', () => {
    expect(formatRole('165511591545143296')).toEqual('<@&165511591545143296>');
});