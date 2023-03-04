const express = require('express');
const bodyParser = require('body-parser');

const https = require ("https");



const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use (express.static("public"));




app.get('/', (req, res) => {
    res.sendFile (__dirname + "/index.html")
  });

  app.post("/", function(req,res){
    
    const eMail = req.body.email;
    const first = req.body.fName;
    const last = req.body.lName;
    const message = req.body.message;

    var data = {
      members: [
        {
          email_address: eMail,
          status: "subscribed",
          merge_fields: {
            FNAME: first,
            LNAME: last,
            MMERGE3: message
          }
        }
      ]
    };

    const jsonData = JSON.stringify(data);

    const url ="https://us21.api.mailchimp.com/3.0/lists/d242c83013";

    const options = {
      method: "POST",
      auth: "boggs:bd39f63492e336c20b5f78eee6717750-us21"
    }

    const request = https.request(url,options, function(response) {

      if (response.statusCode === 200) {
        res.sendFile (__dirname + "/success.html")
      } else {
        res.send("Error please fix it.")
      }

      response.on ("data", function(data){
        console.log(JSON.parse(data));
      })
    })

    request.write(jsonData);
    request.end();
   
  });




 app.post("/success", function(req,res){
  res.redirect("/")
 });

  app.listen(process.env.PORT || 3000, function(){
    console.log("started @ 3000")
  });


// apikey = 356a8f4dd08c50fc76fb2359ae960bfb-us21
// listID = d242c83013

// bd39f63492e336c20b5f78eee6717750-us21