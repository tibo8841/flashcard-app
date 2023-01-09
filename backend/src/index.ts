import express, { Request, Response } from "express";
const app = express();

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("backend is running");
});
