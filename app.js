const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/");

app.get("/", function(req, res){
  res.render("login");
});

app.get("/register",function(req, res){
  res.render("register");
});

app.get("/customer", function(req, res){
  res.render("cust_info");
});

app.get("/dashboard", function(req, res){
  res.render("dashboard");
});


app.listen(3000, function(req, res){
  console.log("Server has started on port 3000");
});
