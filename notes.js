//console.log('starting notes.js');
const fs = require('fs');

let notes = [];

let addNote = (title, body) => {
    
    loadNotes();

    let note = {
        title,
        body
    }

    if(checkIfTitleAlreadyExist(title)){
        console.log("Titulo da nota já existe, favor alterar Titulo da nova nota.");
    }else{
        notes.push(note);
        saveNotes();
        console.log("Nota adicionada com sucesso!");
    }
    
};

let saveNotes = () => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let getAll = () => {

    loadNotes();

    notes.forEach(note => {
        console.log(`================================
        \nTítulo: ${note.title}
        \nConteúdo: ${note.body}
        \n================================`);
    });
};

let removeNote = (title) =>{

    loadNotes();

    note = getNote(title);

    if(note){
        let index = notes.indexOf(note);
        notes.splice(index , 1);
        console.log("Nota excluida com sucesso!");
    }

    saveNotes();
    

};

let getNote = (title) => {

    loadNotes();
    
    let resposta = "Nenhuma nota encontrada com este título: \""+title+"\" .";
    let nota_encontrada;

    notes.forEach((note, index) =>{
        if(note.title === title){
            resposta =`================================
            \nTítulo: ${note.title}
            \nConteúdo: ${note.body}
            \n================================`;
            nota_encontrada = note;
        }
    });

    console.log (resposta);

    return nota_encontrada;
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
        // console.log("ERRO: Arquivo não encontrado!", e);
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
