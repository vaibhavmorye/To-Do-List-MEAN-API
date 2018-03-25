var express = require('express');
var bodyParser = require('body-parser');
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

var app = express();

require('./app/routes/note.routes.js')(app);

app.use(bodyParser.urlencoded({ extends: true }));

app.use(bodyParser.json());


mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function () {
    console.log('could not connenct to the database exiting now ');
    process.exit();
});

mongoose.connection.once('open', function () {
    console.log('connection establishe');
});



app.get('/', function (req, res) {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

app.listen(3000, function () {
    console.log("server is listening on 3000 port");
})
