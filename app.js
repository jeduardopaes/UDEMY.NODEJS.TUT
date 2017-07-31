console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let comando = process.argv[2];

console.log("Comando :" +comando);

if(comando === 'add'){
    console.log("Adicionando nova nota!");
}else if(comando === 'list'){
    console.log("Mostrando lista..");
}else if(comando === 'remove'){
    console.log("Removendo nota!!!");
}else if(comando === 'read'){
    console.log("Mostrando nota");
}else if(comando === 'help'){
    console.log("Comandos possíveis: list, add, remove, read!");
}else{
    console.log("Comando inválido.");
}