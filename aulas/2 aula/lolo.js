// ESCUTA
const enviaMensagem  = require("./aula.2.1.js")
const mensagem = new enviaMensagem();

mensagem.on("EnviaMensagem", nome => {
    console.log(`A ${nome} é legal`)
} )

mensagem.enviar("Luana")