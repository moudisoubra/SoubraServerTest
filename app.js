'use strict';
var restify = require("restify");
var io = require("fs");
console.log('Hello Soubra, Server activated');
var server = restify.createServer();
var playerProfile = [];

server.get("/AddPlayerProfile/:playerID/:score/:aesthetic", function (req, res, next) {
    console.log('Add player');
    var obj = {};
    obj.id = req.params.playerID;
    obj.score = req.params.score;
    obj.aesthetic = req.params.aesthetic;
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

server.listen(process.env.PORT || 3000, function () {
    console.log(process.env.PORT);
});