import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRouter from "./api/routes/userRouter";
import db from "./db/medicareDB";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

db;

app.use("/api/v1/auth/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
