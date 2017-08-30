// var express = require("express");

// var router = express.Router();

var db = require("../models");

module.exports = function(app){


  app.get("/",function(req,res){
	  db.burger.findAll({}).then(function(data){
      var hbsObject = {
        burgers:data
      }
		  console.log("app.get / ", hbsObject);
		  res.render("index",hbsObject);
	     });
  });

  app.post("/", function(req, res) {
    	db.burger.create({
        burger_name:req.body.burger_name,
        // devoured:req.body.devoured
      }).then(function() {
        res.redirect("/");
        });
      
  });

  app.put("/:id", function(req, res) {
    console.log("req.params.id: ", req.params.id);

  // app.put("/:id", function(req, res) {
    // console.log("req.params.id: ", req.params.id);
    db.burger.update(req.body,
      {
        where: {
          id:req.params.id
        }
    }).then(function(){
      res.redirect("/");
    });
    
  });

};
