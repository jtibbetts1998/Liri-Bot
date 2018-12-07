//Initializing and requiring each command
let dotenv = require("dotenv").config();
let keys = require("./keys.js");
let fs = require("fs");
let moment = require("moment");
let Spotify = require('node-spotify-api');
let spotify = new Spotify('keys.spotify');
let axios = require("axios");
let command = process.argv[2];
let userChoice = process.argv.splice(3).join(" ");

if (userChoice) {
    userChoice = ;
}

let userCommand = ;

fs.appendFile("log.txt", userCommand, function(err) {
    if (err) {
        console.log(err);
    }
})

function getConcertInfo() {
    axios.get("" + userChoice + "")
    axios.then(function(response) {
        let concertTitle = "\n" + userChoice + "next show\n"
        console.log(concertTitle);
        fs.appendFile("log.txt", concertTitle, function(err) {
            if (err) {
                console.log(err);
            }
        }
    }
})