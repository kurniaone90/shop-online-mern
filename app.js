var express = require("express");
var path 	= require("path");

// Initial App
var app = express();

// Setup View Engine
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

// Setup public folder
app.use(express.static(path.join(__dirname, "public")));


// Setup Ind
app.get('/', function(req, res){
	res.send("Welcome To Kambing");
});

var port = 3000;
app.listen(port, function() {
	console.log("Server running on port " + port);
});
