import { useQuery } from "@rocicorp/zero/react";
import "./App.css";
import { useZero } from "./use-zero";

function App() {
	const zero = useZero();
	const [posts] = useQuery(zero.query.post);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const title = formData.get("title");
		const content = formData.get("content");
		const id = crypto.randomUUID();
		zero.mutate.post.insert({
			id: id,
			title: title as string,
			content: content as string,
			createdAt: Date.now(),
			updatedAt: Date.now(),
		});
		// reset form
		form.reset();
	};

	return (
		<>
			<h1>Zero + Railway</h1>
			<h2>Posts</h2>
			{posts.map((post) => (
				<div key={post.id}>
					<div style={{ fontWeight: "bold" }}>{post.title}</div>
					<div>{post.content}</div>
					<button
						onClick={() => zero.mutate.post.delete({ id: post.id })}
						type="button"
					>
						Delete
					</button>
				</div>
			))}

			<h2>Create Post</h2>
			<form onSubmit={handleSubmit}>
				<input placeholder="Title" type="text" name="title" />
				<input placeholder="Content" type="text" name="content" />
				<button type="submit">Create</button>
			</form>
		</>
	);
}

export default App;
