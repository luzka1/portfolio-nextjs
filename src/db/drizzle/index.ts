import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { resolve } from "path";
import { projectsTable } from "./schemas";

const sqliteDatabasePath = resolve(process.cwd(), "db.sqlite3");
const sqliteDatabase = new Database(sqliteDatabasePath);

export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    projects: projectsTable,
  },
  logger: false,
});
