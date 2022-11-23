import express from "express";
import cors from "cors";

import { barChartData, lineChartData, pieChartData } from "./data.js";

const app = express();
const port = 3131;

app.use(cors());

app.get("/bar", (req, res) => {
  res.send(barChartData);
});

app.get("/line", (req, res) => {
  res.send(lineChartData);
});

app.get("/pie", (req, res) => {
  res.send(pieChartData);
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
