import express from "express";
import bodyParser from "body-parser";

import { pool } from "./models/db.js";
import clienRoutes from "./routes/clientRoutes.js";

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/client', clienRoutes)

app.listen(3000, () => {
    console.log("Server start in port 3000")
})
