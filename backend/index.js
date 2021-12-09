import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { todoRouter } from "./routes/todoRouter.js";
import { catRouter } from "./routes/categoryRouter.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  })
);
app.use("/api", todoRouter);
app.use("/api", catRouter);
const MONGO_URL =
  "mongodb://Asif:todo1234@cluster0-shard-00-00.dubtt.mongodb.net:27017,cluster0-shard-00-01.dubtt.mongodb.net:27017,cluster0-shard-00-02.dubtt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-d1n893-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = "5000";

const connection = {};
const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
