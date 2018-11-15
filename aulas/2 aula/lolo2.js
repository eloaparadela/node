// EMITE
const EventEmitter = require("events")

class EnviaMensagem extends EventEmitter{
 enviar (nome){
     this.emit("EnviaMensagem", nome)
 }
}

module.exports = EnviaMensagem