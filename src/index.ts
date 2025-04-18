require("dotenv").config();

import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";

import cors from "cors";

import productRouter from "./routes/product.routes";
import reviewRouter from "./routes/review.routes";

import { handleError } from "./middlewares/handleError";

import logger from "./config/winston";

const app = express();

app.use(cors()); 

app.use(express.json()); 

app.use("/products", productRouter);
app.use("/reviews", reviewRouter);

app.get("/env", (req, res) => {
  res.json({
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
  });
});

app.use(handleError);

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      logger.info(
        `O servidor está rodando em http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => console.log(error));
