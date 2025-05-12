import { faker } from "@faker-js/faker";
import { db } from "@repo/db";
import {
	author as authorTable,
	post as postTable,
} from "@repo/db/src/schema/schema";
import express from "express";
import "./env";

const app = express();

const port = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/stats", async (req, res) => {
	const posts = await db.query.post.findMany();
	const authors = await db.query.author.findMany();
	res.json({
		posts: posts.length,
		authors: authors.length,
	});
});

app.get("/generate", async (req, res) => {
	// Create a random author
	const newAuthor = await db
		.insert(authorTable)
		.values({
			name: faker.person.fullName(),
		})
		.returning();

	// Create 5 random posts for this author
	const posts = await Promise.all(
		Array.from({ length: 5 }, () =>
			db
				.insert(postTable)
				.values({
					title: faker.lorem.sentence(),
					content: faker.lorem.paragraphs(),
					authorId: newAuthor[0].id,
				})
				.returning(),
		),
	);

	res.json({
		author: newAuthor[0],
		posts: posts.map((p) => p[0]),
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
