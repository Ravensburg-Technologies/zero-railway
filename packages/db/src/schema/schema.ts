import { createId } from "@paralleldrive/cuid2";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

// auth start
export const post = pgTable("post", {
	id: text()
		.primaryKey()
		.$defaultFn(() => createId()),
	createdAt: timestamp().defaultNow().notNull(),
	updatedAt: timestamp()
		.notNull()
		.defaultNow()
		.$onUpdate(() => new Date()),
	title: text().notNull(),
	content: text().notNull(),
	authorId: text()
		.notNull()
		.references(() => author.id),
});

export const author = pgTable("author", {
	id: text()
		.primaryKey()
		.$defaultFn(() => createId()),
	createdAt: timestamp().defaultNow().notNull(),
	updatedAt: timestamp()
		.notNull()
		.defaultNow()
		.$onUpdate(() => new Date()),
	name: text().notNull(),
});
