import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';

// import path from "path";
// import mongoose from "mongoose";
// import fs from "fs";
// import admin from "firebase-admin";
// import multer from "multer";

const app = express();
const port = process.env.PORT || 3003;

//middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors()); //{origin: ['http://localhost:3000', 'https://ecom-25516.web.app', "*"]},



app.use('/api/v1', authAPIs)
app.use('/api/v1', authGuard)
app.use('/api/v1', productApis)



app.get("/", (req: express.Request, res: express.Response): void => {
  res.send(`"Hello World!", ${req.ip}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
