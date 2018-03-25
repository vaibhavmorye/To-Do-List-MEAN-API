module.exports = function(app){
    var notes = require('../controllers/note.controller.js');
    
    // create new note
    app.post('/notes', notes.create);

    // Retrive all notes
    app.get('/notes', notes.findAll);

    //Retrive a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    //Retrive a single Note with noteId
    app.put('/notes/:noteId', notes.update);

    //Delete a note with noteId
    app.delete('/notes/:noteId', notes.delete);

    
}