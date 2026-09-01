import express from "express";
import { userUpdateTemplate } from "./nodeMailer.js";
const app = express();
const PORT = 8000;

app.use(express.json());
// app.use("/", (req, res) => {
//   res.json({
//     status: "success",
//     message: "Welcome to the mail server page",
//   });
// });
app.post("/", (req, res) => {
  try {
    console.log(req.body);
    userUpdateTemplate();
    res.json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("localhost:" + 8000);
});
