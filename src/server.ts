import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import './database';

const app = express();

app.use(express.json());

app.use(router)

// http://localhost:3333
app.listen(3333, () => console.log("server is running RIGHT NOW"));

