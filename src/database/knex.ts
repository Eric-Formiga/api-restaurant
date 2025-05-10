// knex.ts
import {knex as knexConfig} from "knex";
import config from "../../knexfile";

export const knex = knexConfig(config);
