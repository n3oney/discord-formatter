import { Snowflake } from './Snowflake';

export function formatUser(id: Snowflake): `<@${Snowflake}>`;
export function formatUser(id: Snowflake, hasNickname: true): `<@!${Snowflake}>`;

export function formatUser(id: Snowflake, hasNickname = false): `<@${Snowflake}>` | `<@!${Snowflake}>` {
    return `<@${hasNickname ? '!' : ''}${id}>`;
}