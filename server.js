import express from "express";
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
  console.log(req.body);
  res.json({
    status: "success",
    message: req.body,
  });
});
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("localhost:" + 8000);
});
