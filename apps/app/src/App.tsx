import { useQuery } from "@rocicorp/zero/react";
import "./App.css";
import { useZero } from "./use-zero";

function App() {
	const zero = useZero();
	const [posts] = useQuery(zero.query.post);
	return (
		<>
			<h1>Vite + React</h1>
			{posts.map((post) => (
				<div key={post.id}>{post.title}</div>
			))}
		</>
	);
}

export default App;
