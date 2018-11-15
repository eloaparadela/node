const perguntaIdade = require("./lulo.js");
const idade = new perguntaIdade();

idade.on("PerguntaIdade", idade => {
    console.log(`A minha idade é ${idade}`)
})

idade.perguntar("20")