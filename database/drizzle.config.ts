import { defineConfig } from "drizzle-kit";
// TODO Cannot find module
import { assert } from "jsr:@std/assert";

const databaseHost = Deno.env.get("DATABASE_HOST");
const databasePort = Number(Deno.env.get("DATABASE_PORT"));
assert(databaseHost !== undefined, "DATABASE_URL not defined");
assert(!isNaN(databasePort), "DATABASE_PORT is not defined or a number");

export default defineConfig({
	out: "./drizzle",
	schema: "./src/schema/*",
	dialect: "postgresql",
	dbCredentials: {
		host: databaseHost,
		port: databasePort,
		user: "postgres",
		password: "postgres",
		database: "postgres",
		ssl: false,
	},
});
