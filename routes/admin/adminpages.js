var express = require("express");
var router	= express.Router();


// Setup Ind
router.get('/', function(req, res){
	res.send("Admin Area");
	// res.render("index", {
	// 	title: "Home"
	// });
});

module.exports = router;