import { Snowflake } from './Snowflake';

export function formatEmoji(name: string, id: Snowflake): `<:${string}:${Snowflake}>`;
export function formatEmoji(name: string, id: Snowflake, animated: true): `<a:${string}:${Snowflake}>`;

export function formatEmoji(name: string, id: Snowflake, animated = false): `<:${string}:${Snowflake}>` | `<a:${string}:${Snowflake}>` {
    return `<${animated ? 'a' : ''}:${name}:${id}>`;
}