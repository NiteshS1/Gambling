import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true ,limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import useRouter from './routes/user.route.js';

//routes declaration
app.use("/api/v1/users", useRouter);

// http://localhost:8000/api/v1/users/register

export { app }