var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    title : String,
    content : String
}, {
    timestamp : true
});

module.exports = mongoose.model('Note', NoteSchema);
 