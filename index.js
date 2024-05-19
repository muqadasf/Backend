// const express = require("express");
import express from "express";
const app = express();

// ye db connect ke laie
import connectdb from './Database/connection.js'
//ye hai rout jo export kiya tha waha se yaha import kar rahe
import router from './routings/routings.js'
import bodyParser from "body-parser";
import dotenv from "dotenv";
// dotenv.config();
// const port=process.env.PORT;
// const port = 5000;
const port = 5001;
connectdb();

// ye hum call kar rahe hain apne rputer ko

app.use(bodyParser.json());
app.use('/apis', router);
app.listen(port,()=>{
    console.log(`My server is activate on this port ${port}`)
});

// app.listen(process.env.PORT,()=>{
//     console.log(`mY SERVER is activiare on this port ${process.env.PORT}`)
// });