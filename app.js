//console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

//========= FIM DOS IMPORTS ===========================================


let comando = argv._[0];

//console.log("Comando :" +comando);

if(comando === 'add'){
    if(argv.title && argv.body){
        let note = notes.addNote(argv.title, argv.body);
        if(note){
            console.log(`Título: ${note.title}\nTexto: ${note.body}`);
            console.log("Nota adicionada com sucesso!");
        }else{
            console.log("Titulo da nota já existe, favor alterar Titulo da nova nota.");
        }
    }else{
        console.log("Necessário --title <titulo da nota> e --body <corpo da nota>");
    }
}else if(comando === 'list'){
    notes_list = notes.getAll();

    notes_list.forEach(note => {
        console.log(`================================
        \nTítulo: ${note.title}
        \nConteúdo: ${note.body}
        \n================================`);
    });

}else if(comando === 'remove'){

    if(notes.removeNote(argv.title)){
        console.log("Nota removida com sucesso!");
    }else{
        console.log("Nenhuma nota removida, confira o titulo da nota.");
    }
}else if(comando === 'read'){
    let note = notes.getNote(argv.title);

    if(note){
        console.log(`================================
        \nTítulo: ${note.title}
        \nConteúdo: ${note.body}
        \n================================`);
    }else{
        console.log("Nota não encontrada, verifique o titulo!");
    }
}else if(comando === 'help'){
    console.log("Comandos possíveis: list, add, remove, read!");
}else{
    console.log("Comando inválido.");
    console.log("Comandos possíveis: list, add, remove, read!");
}