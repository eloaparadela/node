// console.log("Oii"); 
// console.log(window)
// console.log(global)
// console.log(global.setTimeout)
const mostramensagem = name => `Olá , ${name}`;
 function diga (name){
     console.log(mostramensagem(name));
 }
 module.exports.digaOla = diga; 
 console.log(diga)



 const mostraidade = idade => `Idade , ${idade}`;
 function age (idade){
     console.log(mostraidade(idade));
 }
 module.exports.digaAge = age; 
 console.log(age)


 const mostraApelido = apelido => `apelido , ${apelido}`;
 function nickname (apelido){
     console.log(mostraApelido(apelido));
 }
 module.exports.digaApelido = nickname; 
 console.log(nickname)


 const mostraMay = amiga => `Nominho da amiguinha , ${amiga}`;
 function friend (amiga){
     console.log(mostraMay(amiga));
 }
 module.exports.digaAmiga = friend; 
 console.log(friend)
