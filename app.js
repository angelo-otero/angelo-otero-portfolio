//jshint esversion:9

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const app = express();

const port = process.env.port || 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
});

app.get("contact", function(req, res){
  res.render("contact");
});

app.post("/", function (req, res){
  const output = `
  <p>Someone is trying to contact you!</p>
  <h3>Contact's Info:</h3>
  <ul>
    <li>First Name: ${req.body.firstName}</li>
    <li>Last Name: ${req.body.lastName}</li>
    <li>Email: ${req.body.email}</li>
    <li>Survey: ${req.body.inputSurvey}</li>
  </ul>
  <h3>Contact's Message:</h3>
  <p>${req.body.messageInput}</p>
  `;

  const auth = {
    auth: {
      api_key: process.env.API_KEY,
      domain: process.env.DOMAIN
    }
  };

  let transporter = nodemailer.createTransport(mailGun(auth));

  const mailOptions = {
      from: '"Web Dev Email Contact" <postmaster@mg.angelo-otero.com>', // sender address
      to: process.env.EMAIL, // list of receivers
      subject: 'Web Dev Contact Request', // Subject line
      text: 'Hey there!', // plain text body
      html: output // html body
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
      console.log('Error:', err);
    } else {
      console.log('Message Sent!');
    }
    res.render('contact');
  });

});

app.listen(port, function(){
  console.log("Server started on port 3000");
});
