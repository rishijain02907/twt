const express = require('express');
const app = express();

const PORT = 3000;

const connect = require('./config/database');

app.listen(PORT, async () =>{
    console.log(`Server started at PORT:${PORT}`);
    await connect();
    console.log("Mongo DB Connected");
});