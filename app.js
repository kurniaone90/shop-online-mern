var express 	= require("express");
var path 		= require("path");
var mongoose 	= require("mongoose");
var config 		= require("./config/database");


// DB Connect
// mongoose.connect("mongodb://localhost:27017/shop_online");
mongoose.connect(config.database);

var db  = mongoose.connection;
db.on("error", console.error.bind(console, "connection error :"));
db.once("open", function() {
	console.log("Connected to mongodb")
});

// Initial App
var app 		= express();

// Setup View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setup public folder
app.use(express.static(path.join(__dirname, "public")));


// Setup Ind
app.get('/', function(req, res){
	// res.send("Welcome To Kambing");
	res.render("index", {
		title: "Home"
	});
});

var port = 3000;
app.listen(port, function() {
	console.log("Server running on port " + port);
});
