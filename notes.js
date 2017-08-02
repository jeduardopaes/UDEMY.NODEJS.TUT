//console.log('starting notes.js');
const fs = require('fs');

let notes = [];

let addNote = (title, body) => {
    
    let note = {
        title,
        body
    }

    if(checkIfTitleAlreadyExist(title)){
        console.log("Titulo da nota já existe, favor alterar Titulo da nova nota.");
    }else{
        notes.push(note);

        fs.writeFileSync("notes-data.json", JSON.stringify(notes));

        console.log("Nota adicionada com sucesso!");
    }
    
};

let getAll = () => {
    notes.forEach(note => {
        console.log(`================================
        \nTítulo: ${note.title}
        \nConteúdo: ${note.body}
        \n================================`);
    });
};

let removeNote = (title) =>{
    console.log("Removendo nota...", title);
};

let getNote = (title) => {
    
    let resposta = "Nenhuma nota encontrada com este título: \""+title+"\" .";
    
    notes.forEach(note =>{
        if(note.title === title){
            resposta =`================================
            \nTítulo: ${note.title}
            \nConteúdo: ${note.body}
            \n================================`;
        }
    });

    console.log (resposta);
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
    }catch(e){
        // console.log("ERRO: Arquivo não encontrado!", e);
    }
};


module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
    loadNotes
};
