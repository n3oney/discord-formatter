import { Snowflake } from './Snowflake';

export function formatChannel(id: Snowflake): `<#${Snowflake}>` {
    return `<#${id}>`;
}