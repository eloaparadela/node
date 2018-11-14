const EventEmitter =require('events');
const events = new EventEmitter();

// event.on('mensagemEnviada', function(){
//    console.log('Ouvi esse evento');
// })
// event.emit('mensagemEnviada');

// event.on('mensagemEnviada', function(flub){
//     console.log('Ouvi esse evento', flub.nomeDoEvento);

// });
// event.emit('mensagemEnviada', {nomeDoEvento: 'mensagemEnviada'});

function enviar(mensagem){
    console.log('Enviando mensagem:', mensagem);
    events.emit('mensagemEnviada', mensagem);
}

module.exports.enviar = enviar
module.exports.events =events