'use strict';
var restify = require("restify");
var io = require("fs");
console.log('Hello world');
var server = restify.createServer();
var leaderBoard = [];
server.get("/leaderBoard", function (req, res, next) {
    res.send(JSON.stringify({ "leaderBoard":leaderBoard }));
    next();
});
server.get("/AddleaderBoard/:playerID/:score", function (req, res, next) {
        var obj = {};
    obj.id = req.params.playerID;
    obj.score = req.params.score;
    leaderBoard[obj.id] = (obj);
    res.send({ "leaderBoard": JSON.stringify(leaderBoard) });
    next();
});
server.listen(3000, function () {

});