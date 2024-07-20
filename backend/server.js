const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const mongoose = require("mongoose");

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sports_stats"
})

app.get('/', (req, res) => {
    return res.json("From backend side");
})

app.get('/data', (req, res) => {
    const sql = 'SELECT * FROM data';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8083, () => {
    console.log("Listening");
})