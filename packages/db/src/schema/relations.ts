import { relations } from "drizzle-orm";
import * as schema from "./schema";

export const postRelations = relations(schema.post, ({ one }) => ({
	author: one(schema.author, {
		fields: [schema.post.authorId],
		references: [schema.author.id],
	}),
}));

export const authorRelations = relations(schema.author, ({ many }) => ({
	posts: many(schema.post),
}));
