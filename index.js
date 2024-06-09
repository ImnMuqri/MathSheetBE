const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const playerRoutes = require("./Routes/PlayerRoutes.js");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const url = process.env.MONGODB_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

app.use(express.json());
app.use(cors());

try {
  con.on("open", () => {
    console.log("Connected to the database");
  });
} catch (error) {
  console.log("Error: " + error);
}
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/api", playerRoutes);

const port = 9000;
app.listen(port, () => {
  console.log("Server started on port " + port);
});
