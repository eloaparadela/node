const readline = require('readline');
const io =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// function chamaOutraFuncao(dado){
//     return dado * 10;
// }

io.question('Qual seu nome ?', nome =>{
    console.log('koe ', nome);
    io.close();
});