const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('Hello World, mundi, mundo');
        res.end();
    }

   
    if (req.url === '/reprograma'){
        res.write(JSON.stringify([1,2,3]));
        res.end()
    }

    if (req.url === '/reprograma/cursos'){
        res.write(JSON.stringify([{nome:'Anna', email:'aninha@yahoo.com'}, {nome:'Eloá'}]));
        res.end();
    }
});

server.on('connection', () =>{
    console.log('pagina carregada');
});

server.listen(3000);
console.log('Escutando na porta 3000');