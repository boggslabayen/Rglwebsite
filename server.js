const express = require('express');
const bodyParser = require('body-parser');

const https = require ("https");
const app = express();
const ejs = require("ejs");



app.use(bodyParser.urlencoded({extended: true}));
app.use (express.static("public"));
app.set ("view engine", "ejs");




app.get('/', (req, res) => {
    res.sendFile (__dirname + "/index.html")
  
   
  });

  // app.post("/", function(req,res){
    
  //   const eMail = req.body.email;
  //   const first = req.body.fName;
  //   const last = req.body.lName;
  //   const message = req.body.message;
  //   const client = require("@mailchimp/mailchimp_marketing");


  //   client.setConfig({
  //     apiKey: e175a560a0730b5bb5aaf664d911a70c-us21,
  //     server: us21,
  //   });

  //   const listId = d242c83013;

  //   const subscribingUser = {
  //     firstName: first,
  //     lastName: last,
  //     email: eMail,
  //   };

  //   async function run() {
  //     const response = await mailchimp.lists.addListMember(listId, {
  //       email_address: subscribingUser.email,
  //       status: "subscribed",
  //       merge_fields: {
  //         FNAME: subscribingUser.firstName,
  //         LNAME: subscribingUser.lastName
  //       }
  //     });

  //     console.log(
  //       `Successfully added contact as an audience member. The contact's id is ${
  //         response.id
  //       }.`
  //     );
  //   }
    




  //   //     FNAME: first,
  //   //         LNAME: last,
  //   //         MMERGE3: message
  //   //       }
  //   //     }
  //   //   ]
  //   // };
  //   // var data = {
  //   //   members: [
  //   //     {
  //   //       email_address: eMail,
  //   //       status: "subscribed",
  //   //       merge_fields: {
    

  //   // const jsonData = JSON.stringify(data);


  //   // const url ="https://us21.api.mailchimp.com/3.0/lists/d242c83013";

  //   // const options = {
  //   //   method: "POST",
  //   //   auth: "boggs:bd39f63492e336c20b5f78eee6717750-us21"
  //   // }

  //   // const request = https.request(url,options, function(response) {

  //   //   if (response.statusCode === 200) {
  //   //     res.sendFile (__dirname + "/success.html")
  //   //   } else {
  //   //     res.send("Error please fix it.")
  //   //   }

  //   //   response.on ("data", function(data){
  //   //     console.log(JSON.parse(data));
  //   //   })
  //   // })




  //   request.write(jsonData);
  //   request.end();
   
  // });




 app.post("/success", function(req,res){
  res.redirect("/")
 });

  app.listen(process.env.PORT || 3000, function(){
    console.log("started @ 3000")
  });


// apikey = 356a8f4dd08c50fc76fb2359ae960bfb-us21
// listID = d242c83013

// e175a560a0730b5bb5aaf664d911a70c-us21