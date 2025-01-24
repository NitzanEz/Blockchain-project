var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/html/ethereum.html");
});

app.get("/ethereum", function (req, res) {
    res.sendFile(__dirname + "/public/html/ethereum.html");
});

app.get("/arbitrum", function (req, res) {
    res.sendFile(__dirname + "/public/html/arbitrum.html");
});

console.log("http://localhost:5000/");
app.listen(5000);
