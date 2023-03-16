// Importando o módulo realine-sync
const readlineSync = require("readline-sync");

//Array para armazenar as propriedades
let listaProp = [];

console.log('Por favor digite uma propriedade CSS ou SAIR quando nao quiser mais continuar!');

while(true){

    //armazenando a resposta do usuário
    const propCSS = readlineSync.question('Digite uma propriedade CSS!');

    if(propCSS == ''){

        console.log('Não deixe vazio por favor');
     
     } else if (propCSS !='' && propCSS != 'sair'){

        listaProp.push(propCSS);
         continue;

     } else if (propCSS == 'sair'){

        //array em ordem alfabética
        console.log(listaProp.sort());

        console.log('Foi um prazer ter você aqui!');
        break;
     }
}
