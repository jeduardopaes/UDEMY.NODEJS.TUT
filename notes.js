//console.log('starting notes.js');
const fs = require('fs');

let notes = [];

let addNote = (title, body) => {
    
    let note = {
        title,
        body
    }

    notes.push(note);

    fs.writeFileSync("notes-data.json", JSON.stringify(notes));

    console.log("Nota adicionada com sucesso!");
};

let getAll = () => {
    console.log("Pegando todas as notas...");
};

let removeNote = (title) =>{
    console.log("Removendo nota...", title);
};

let getNote = (title) => {
    console.log("Pegando nota...", title);
};

let loadNotes = () => {
    try{
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
    }catch(e){
        console.log("ERRO: Arquivo não encontrado!", e);
    }
};


module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
    loadNotes
};
