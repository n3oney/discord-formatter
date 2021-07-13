import { Snowflake } from './Snowflake';

export function formatRole(id: Snowflake): `<@&${Snowflake}>` {
    return `<@&${id}>`;
}