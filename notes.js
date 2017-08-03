//console.log('starting notes.js');
const fs = require('fs');

let addNote = (title, body) => {
    
    let notes = loadNotes();

    let note = {
        title,
        body
    }

    if(!checkIfTitleAlreadyExist(title)){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
};

let saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let getAll = () => {

    let notes = loadNotes();

    return notes;
};

let removeNote = (title) =>{

    let notes = loadNotes();

    notes_filtrado = notes.filter((note) => note.title != title);
    
    saveNotes(notes_filtrado);

    return notes.length > notes_filtrado.length;

};

let getNote = (title) => {

    let notes = loadNotes();

    return notes.find((note) => note.title === title);
};

let checkIfTitleAlreadyExist = (title_passado) =>{
    
    let exist = false;
    
    notes.forEach((note) => {
        if(title_passado === note.title){
            exist = true;
        }
    });

    return exist;
};

let loadNotes = () => {
    try{
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
        return notes;
    }catch(e){
        return [];
    }
};


module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
    loadNotes,
    saveNotes
};
