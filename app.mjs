import express from "express";
import cors from "cors";
const app = express();

app.use(cors("*"));
app.use(express.json());

import userRouter from "./router/user.mjs";

app.use("/users", userRouter);
app.use("/users", userRouter);
app.use("/doctor", userRouter);

app.all("*", async (req, res) => {
  throw Error("route is not exists");
});

export default app;
