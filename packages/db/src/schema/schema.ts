import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// auth start
export const post = pgTable("post", {
	id: uuid().primaryKey(),
	createdAt: timestamp().defaultNow().notNull(),
	updatedAt: timestamp()
		.notNull()
		.defaultNow()
		.$onUpdate(() => new Date()),
	title: text().notNull(),
	content: text().notNull(),
});
