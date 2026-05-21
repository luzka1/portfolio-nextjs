import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const projectsTable = sqliteTable("projects", {
  id: text("id").primaryKey(),
  img: text("img"),
  name: text("name").notNull(),
  tiny_description: text("tiny_description").notNull(),
  full_description: text("full_description").notNull(),
  proj_url: text("proj_url"),
  git_link: text("git_link"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export type PostTableSelectModel = InferSelectModel<typeof projectsTable>;
export type PostTableInsertModel = InferInsertModel<typeof projectsTable>;
