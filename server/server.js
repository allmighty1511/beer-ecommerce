import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

app.use(cors());

app.use(
	"/products",
	express.static(
		path.join(__dirname, "public", "products"),
	),
);

app.use("/api", apiRoutes);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
