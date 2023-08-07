import { UseQueryResult } from "@tanstack/react-query";

export type GetAll<T> = UseQueryResult<T[]>;

export type GetById<T> = UseQueryResult<T>;