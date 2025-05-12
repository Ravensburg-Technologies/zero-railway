import {
	ANYONE_CAN,
	type PermissionsConfig,
	type Row,
	createSchema,
	definePermissions,
	number,
	relationships,
	string,
	table,
} from "@rocicorp/zero";

const post = table("post")
	.columns({
		id: string(),
		title: string(),
		content: string(),
		authorId: string(),
		createdAt: number(),
		updatedAt: number(),
	})
	.primaryKey("id");

const author = table("author")
	.columns({
		id: string(),
		name: string(),
		email: string(),
		createdAt: number(),
		updatedAt: number(),
	})
	.primaryKey("id");

// Define relationships
const postRelationships = relationships(post, ({ one }) => ({
	author: one({
		sourceField: ["authorId"],
		destField: ["id"],
		destSchema: author,
	}),
}));

const authorRelationships = relationships(author, ({ many }) => ({
	posts: many({
		sourceField: ["id"],
		destField: ["authorId"],
		destSchema: post,
	}),
}));

// Create schema
export const schema = createSchema({
	tables: [post, author],
	relationships: [postRelationships, authorRelationships],
});

export type Schema = typeof schema;
export type Post = Row<typeof schema.tables.post>;
export type Author = Row<typeof schema.tables.author>;

// The contents of your decoded JWT.
type AuthData = {
	sub: string;
};

export const permissions = definePermissions<AuthData, Schema>(schema, () => {
	return {
		post: {
			row: {
				select: ANYONE_CAN,
				insert: ANYONE_CAN,
				update: {
					preMutation: ANYONE_CAN,
					postMutation: ANYONE_CAN,
				},
				delete: ANYONE_CAN,
			},
		},
		author: {
			row: {
				select: ANYONE_CAN,
				insert: ANYONE_CAN,
				update: {
					preMutation: ANYONE_CAN,
					postMutation: ANYONE_CAN,
				},
				delete: ANYONE_CAN,
			},
		},
	} satisfies PermissionsConfig<AuthData, Schema>;
});
