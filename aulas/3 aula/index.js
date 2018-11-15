const http =require('http');

const server =http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('Hello World, mundi, mundo');
        res.end();
    }

    if (req.url === '/reprograma'){
        res.write(JSON.stringify([1,2,3]));
        res.end()
    }

    // if (req.url === '/reprograma/cursos'){
    //     const alunas = '[{nome:Anna}, {nome:Eloá}]'
    //     res.write(JSON.stringify(alunas));
    // }
});

server.on('connection', () =>{
    console.log('pagina carregada');
});

server.listen(3000);
console.log('Escutando na porta 3000');
