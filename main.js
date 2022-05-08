const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
const expressip = require('express-ip');
const cookieParser = require('cookie-parser');

app.use(express.json()); 
app.use(express.static("./public")); // set a public / static directory to ./public
app.set('views', path.join(__dirname, 'pages')); // Set a Views directory to ./pages
app.set('view engine', 'ejs'); // Set View Engine to EJS
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json()); // Body Parser
app.use(expressip().getIpInfoMiddleware); // IP Information Middleware
app.use(cookieParser()); // Cookie Parser

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('X-Frame-Options', 'SAMEORIGIN');
    next();
});

app.get('/', (req, res) => {
    // GET /
});


app.listen(3000, (connection) => console.log('[^] Web Server Launched'));
