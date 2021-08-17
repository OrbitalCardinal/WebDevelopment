const express = require('express');
const path = require('path');
const app = express();
const Chart = require('chart.js');

const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));

app.use("/", (req,res,next) => {
    res.sendFile(path.join(__dirname, "index.html"));
});




app.listen(3000);