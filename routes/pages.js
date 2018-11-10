var express = require("express");
var router	= express.Router();


// Setup Ind
router.get('/', function(req, res){
	// res.send("Welcome To Kambing");
	res.render("index", {
		title: "Home"
	});
});

module.exports = router;