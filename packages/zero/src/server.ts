import express from "express";
import { exec } from "node:child_process";

const app = express();
app.get("/run-migration", (req, res) => {
	const options = { cwd: process.cwd() };
	exec(
		"npx zero-deploy-permissions -p src/schema.ts",
		options,
		(error, stdout, stderr) => {
			if (error) {
				console.error(`Error: ${error}`);
				return res.status(500).json({ error: error.message });
			}
			if (stderr) {
				console.error(`stderr: ${stderr}`);
			}
			console.log(`stdout: ${stdout}`);
			res.json({ message: "Migration completed", output: stdout });
		},
	);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
