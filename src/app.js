const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from Server");
});
app.listen(3000, () => {
  console.log("Server is successfully listing to port 3000");
});
