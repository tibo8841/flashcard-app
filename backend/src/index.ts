import express from "express";
const app = express();

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("backend is running!");
});
