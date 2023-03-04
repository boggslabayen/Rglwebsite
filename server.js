const express = require('express');
const bodyParser = require('body-parser');

const https = require ("https");
const app = express();
const ejs = require("ejs");



app.use(bodyParser.urlencoded({extended: true}));
app.use (express.static("public"));
app.set ("view engine", "ejs");




app.get('/', (req, res) => {
  res.render("home");
  });

app.get('/about', (req, res) => {
  res.render("about");
  });

app.get('/work', (req, res) => {
  res.render("work");
  });

app.get('/blogs', (req, res) => {
  res.render("blogs");
  });





 app.post("/success", function(req,res){
  res.redirect("/")
 });

  app.listen(process.env.PORT || 3000, function(){
    console.log("started @ 3000")
  });


// apikey = 356a8f4dd08c50fc76fb2359ae960bfb-us21
// listID = d242c83013

// e175a560a0730b5bb5aaf664d911a70c-us21