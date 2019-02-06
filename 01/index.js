let readlineSync = require('readline-sync');

let metros= readlineSync.questionInt('Digite a quantidade de metros quadrados a serem pintados:\n');
let litros = metros/6;
let precolG = 80.0;
let capacidadelG = 18;
let precoGaloes = 25.0;
let capacidadeGaloes = 3.6;

console.log('você irá precisar de:', litros, ' litros de tinta');
let lataGrandeT = litros /capacidadelG;
let galoes = litros / capacidadeGaloes;

let funcoes = ['comprar apenas latas de 18 litros', 'comprar apenas galoes de 3,6 litros', 'misturar latas e galoes\n'];
let opcoes = readlineSync.keyInSelect(funcoes, 'Escolha uma opção');

switch(opcoes){
    case 0:
    console.log('você irá pagar R$:', lataGrandeT * precolG,);
    break;

    case 1:
    console.log('você irá pagar R$:', galoes * precoGaloes);
    break;

    case 2:
    console.log(capacidadelG + capacidadeGaloes);

}



