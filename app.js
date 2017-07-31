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
        notes.addNote(argv.title, argv.body);
    }else{
        console.log("Necessário --title <titulo da nota> e --body <corpo da nota>");
    }
}else if(comando === 'list'){
    notes.getAll();
}else if(comando === 'remove'){
    notes.removeNote(argv.title);
}else if(comando === 'read'){
    notes.getNote(argv.title);
}else if(comando === 'help'){
    console.log("Comandos possíveis: list, add, remove, read!");
}else{
    console.log("Comando inválido.");
}