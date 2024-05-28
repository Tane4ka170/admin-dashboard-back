import mongoose from "mongoose";
import app from "./app";

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(7284, () => {
      console.log("Server running. Use our API on port: 7284");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
