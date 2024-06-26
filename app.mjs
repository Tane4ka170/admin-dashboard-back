import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/api/auth.mjs";
import customersRouter from "./routes/api/customers.mjs";
import ordersRouter from "./routes/api/orders.mjs";
import productsRouter from "./routes/api/products.mjs";
import suppliersRouter from "./routes/api/suppliers.mjs";
import incomesRouter from "./routes/api/incomes.mjs";
import dashboardsRouter from "./routes/api/dashboards.mjs";

dotenv.config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/user", authRouter);
app.use("/api/customers", customersRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/products", productsRouter);
app.use("/api/suppliers", suppliersRouter);
app.use("/api/dashboard", dashboardsRouter);
app.use("/api/incomes", incomesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
