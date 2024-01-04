import express, { Request, Response, Application } from "express";
import { stockRoutes } from "./routes/stock.routes";

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Health check! Welcome to Stocks Server!");
});

app.use("/api/v1/stocks", stockRoutes);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export default app;
