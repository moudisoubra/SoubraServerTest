'use strict';
var restify = require("restify");
var fs = require("fs");
var http = require('http');  
var server = restify.createServer();
console.log('Hello Soubra, Server activated');

var mongoose = require('mongoose');

var playerProfile = [];
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/MeltDown';

mongoose.connect(uristring, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    Console.log("Connected to Mongoose!!!!! Mabroooook");
});

var userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: { type: String, trim: true }
    },
    age: { type: Number, min: 0 }
});

server.get("/SaveMongoose", function (req, res, next) {

    userSchema.save(function (err) { if (err) console.log('Error on save!') });
    console.log("Saved Mongoose" + userSchema);

});


server.get("/AddPlayerProfile/:playerID/:score/:aesthetic/:r/:g/:b", function (req, res, next) {

    console.log('Add player');
    var obj = {};
    obj.id = req.params.playerID;
    obj.score = req.params.score;
    obj.aesthetic = req.params.aesthetic;
    obj.r = req.params.r; 
    obj.g = req.params.g; 
    obj.b = req.params.b; 
    playerProfile.push(obj);
    res.send({playerProfile});
    next();

});

server.get("/Print", function (req, res, next) {

    console.log('print');
    res.send({playerProfile});
    next();

});

server.get("/DeleteArray", function (req, res, next) {

    console.log('print');
    playerProfile.length = 0;
    res.send({ playerProfile });
    next();

});

server.get("/ReadFile", function (req, res, next) {

    fs.readFile("temp.txt", function (err, buf) {

        var string = buf.toString();

        res.send(JSON.parse(string));
        
    });
});

server.get("/SaveFile", function (req, res, next) {

    var data = JSON.stringify(playerProfile);

    fs.writeFile("temp.txt", data, (err) => {

        if (err) console.log(err);

        res.send("Successfully Written to File Manually.");
        console.log("Successfully Written to File Manually.");
    });
});


function SavingToFile()
{
    var data = JSON.stringify(playerProfile);

    fs.writeFile("temp.txt", data, (err) => {

        if (err) console.log(err);

        console.log("Successfully Written to File.");
    });

}

setInterval(SavingToFile, 3000);
    

server.listen(process.env.PORT || 3000, function () { /// Heroku Port process.env.PORT

    //console.log(process.env.PORT);

});