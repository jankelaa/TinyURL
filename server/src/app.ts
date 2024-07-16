import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { urlRouter } from "./routes/url.js";
import { adminRouter } from "./routes/admin.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", urlRouter);
app.use("/admin", adminRouter);

export { app };
