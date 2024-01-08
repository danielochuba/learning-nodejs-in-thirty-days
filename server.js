const express = require("express");

const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})

app.get('/home', function (req, res) {
    res.send('<h1>Home</h1>')
})

app.get('/about', function (req, res) {
    res.send('<h1>About</h1>')
})

app.get('/contact', function (req, res) {
    res.send('<h1>Contact</h1>')
})

app.listen(3000, function() {
    console.log('server started on port 3000')
});