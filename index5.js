const EventEmitter =require('events');


class EnviaMensagem extends EventEmitter{
    enviar(mensagem){
        console.log('Enviando mensagem', mensagem);
        this.emit('mensagemEnviada', mensagem);
    }
}

module.export= EnviaMensagem