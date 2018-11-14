// const EventEmitter = require('events');
const enviaMensagem =require('./index3.js');


enviaMensagem.events.on('mensagemEnviada', mensagem => {
    console.log(`A mensagem "${mensagem}" foi enviada com sucesso`)
})


enviaMensagem.enviar('Ola, mundo');