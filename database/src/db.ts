import { drizzle } from "drizzle-orm/node-postgres";
import { assert } from "@std/assert";

const databaseHost = Deno.env.get("DATABASE_HOST");
const databasePort = Deno.env.get("DATABASE_PORT");
assert(databaseHost !== undefined, "DATABASE_HOST not defined");
assert(databasePort !== undefined, "DATABASE_PORT not defined");

export const db = drizzle(`${databaseHost}:${databasePort}`);
