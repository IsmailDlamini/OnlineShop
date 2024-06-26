/* eslint-env node */

import express from 'express';
//import products from "./Data/products.js"
import cors from "cors"
import dotenv from "dotenv"
import connectDatabase from './Config/MongoDb.js';
import ImportData from './DataImport.js';
import productRoute from './Routes/ProductRoutes.js';
import userRoute from './Routes/userRoutes.js';

const app = express();

dotenv.config();
connectDatabase();
app.use(express.json())
app.use(cors());

// API 
app.use("/api/import", ImportData)
app.use("/api/products", productRoute)
app.use("/api/products/:id", productRoute)
// app.use("/api/search/:searchTerm", productRoute)
app.use("/api/users", userRoute)

app.get("/", (req, res) => {
    res.send("the api is running good");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`running in port ${PORT}....`));