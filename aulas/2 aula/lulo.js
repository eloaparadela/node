const EventEmitter= require("events")

class PerguntaIdade extends EventEmitter{
    perguntar(idade){
        this.emit("PerguntaIdade", idade)
    }
}

module.exports= PerguntaIdade