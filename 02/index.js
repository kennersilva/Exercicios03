
let readlineSync = require('readline-sync');

let tamanho = readlineSync.questionFloat('Qual tamanho do arquivo para download?\n');
let velocidade = readlineSync.questionFloat('Qual a velocidade da sua internet?\n');
let tempo = ((tamanho * 8) / velocidade) / 60 
console.log('tempo aproximado de download:', tempo, 'minutos');



