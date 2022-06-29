const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// Для парсинга application/json
app.use(express.json());

//Для парсинга application/x-www-from-urlencoded
app.use(express.urlencoded({extended: true}));

//Путь к папке с картинками
app.use("/static", express.static(__dirname + "/assets"));

app.use('/api/planes', require('./routes/planes'));

mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        app.listen(port, () => {
            console.log(`Appk listening on port ${port}`);
        })
    });