import express from "express";
import cors from "cors";
const app = express();

app.use(cors("*"));
app.use(express.json());

import userRouter from "./router/user.mjs";
import doctorRouter from "./router/doctor.mjs";
import categoryRouter from "./router/category.mjs";
import appointmentRouter from "./router/appointment.mjs";
import uploadRoute from "../Node Js Project/router/uploderRoute.mjs";
app.use("/users", userRouter);
app.use("/doctor", doctorRouter);
app.use("/category", categoryRouter);
app.use("/appointment", appointmentRouter);
app.use("/upload", uploadRoute);
app.all("*", async (req, res) => {
  throw Error("route is not exists");
});

export default app;
