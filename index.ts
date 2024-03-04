import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/v1/api", routes);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} `);
});
