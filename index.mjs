import mongoose from "mongoose";
import "./config.mjs";
import app from "./app.mjs";

try {
  await mongoose.connect(process.env.DB_URL, {
    dbName: "doctor_appointment",
  });
  console.log("Connected to Database");
} catch (error) {
  console.error("Database connection error:", error);
}

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
// define the route
// app.get("/", (req, res) => {
//   res.send(`<h1 style="color: green;">Hello Anurag</h1>`);
// });

(async () => {
  try {
    app.listen(process.env.PORT);
    console.log(`listen on port:${process.env.PORT}`);
  } catch (error) {
    return error;
  }
})();
