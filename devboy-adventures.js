var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var adventureComics = require("./lib/adventure-comics.js");

app.engine(".html", require("ejs").__express);
app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.use(express.static(__dirname));

app.get("/adventure-comics", function (request, response) {
    adventureComics.listComics(request, response);
});

app.get("*", function (request, response) {
    response.render("index");
});

app.listen(port, function () {
    console.log("Listening on port " + port);
});
