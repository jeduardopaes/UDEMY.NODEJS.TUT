//console.log('starting notes.js');

let addNote = (title, body) => {
    console.log("Adicionando nova nota... ", title, body);
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


module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote
};
