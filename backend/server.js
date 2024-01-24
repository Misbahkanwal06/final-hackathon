
const mongoose = require("./dbs");

const express = require('express');
const app = express();

// const mongoose = require('mongoose');
app.use(express.json());
const cors = require("cors");
app.use(cors({origin: true, credentials: true}));
require('dotenv').config();
const port = process.env.PORT || 3002;
app.use(express.urlencoded({ extended: true }))
const userRoutes = require('./routes/user');
app.use('/api/users',userRoutes);

app.listen(port,()=>{
    console.log("Server started");
})