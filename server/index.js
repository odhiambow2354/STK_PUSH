const express = require("express");
const app = express();
const tokenRouter = require("./routes/token");
const cors = require("cors");

app.listen(4000, () => {
  console.log("server started");
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/token", tokenRouter);
