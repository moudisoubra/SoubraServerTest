'use strict';
var restify = require("restify");
var io = require("fs");
console.log('Hello world');
var server = restify.createServer();
var playerProfile = [];
server.get("/leaderBoard", function (req, res, next) {
    console.log("test");
    res.send(JSON.stringify({playerProfile}));
    next();
});
server.get("/AddPlayerProfile/:playerID/:score/:aesthetic", function (req, res, next) {
    console.log("test");
    var obj = {};
    obj.id = req.params.playerID;
    obj.score = req.params.score;
    obj.aesthetic = req.params.aesthetic;
    playerProfile.push(obj);
    res.send({playerProfile});
    next();
});

server.get("/Print", function (req, res, next) {
    console.log("test");
    res.send({playerProfile});
    next();
});
server.get("/", function (req, res, next) {
    console.log("test");
    res.send("Please use thing");
    next();
});

server.listen(process.env.PORT || 3000
, function () {
console.log("listning on:"+process.env.PORT);

});
