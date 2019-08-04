'use strict';
var restify = require("restify");
var io = require("fs");
console.log('Hello world');
var server = restify.createServer();
var playerProfile = [];
server.get("/leaderBoard", function (req, res, next) {
    res.send(JSON.stringify({playerProfile}));
    next();
});
server.get("/AddPlayerProfile/:playerID/:score/:aesthetic", function (req, res, next) {
    var obj = {};
    obj.id = req.params.playerID;
    obj.score = req.params.score;
    obj.aesthetic = req.params.aesthetic;
    playerProfile.push(obj);
    res.send({playerProfile});
    next();
});

server.get("/Print", function (req, res, next) {
    res.send({playerProfile});
    next();
});

server.get("/DeleteArray", function (req, res, next) {
    playerProfile.length = 0;
    res.send({ playerProfile });
    next();
});

server.listen(3000, function () {

});