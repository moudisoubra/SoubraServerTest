'use strict';
var restify = require("restify");
var fs = require("fs");
console.log('Hello Soubra, Server activated');
var server = restify.createServer();
var playerProfile = [];

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

function SavingToFile()
{
    var data = JSON.stringify(playerProfile);

    fs.writeFile("temp.txt", data, (err) => {

        if (err) console.log(err);

        console.log("Successfully Written to File.");
    });

}

setInterval(SavingToFile, 3000);
    

server.listen(process.env.PORT || 3000, function () {

    //console.log(process.env.PORT);

});