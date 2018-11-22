const express = require('express');
const users = require('./users.js');
const Joi = require('joi');
const app = express();

// const Joi = require('joi');
// const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/api/users', (req, res) => res.send(users));

app.get('/api/users/:id', (req, res) => {
  const foundUser = users.find(user => user.id === parseInt(req.params.id));
  if (!foundUser) {
    return res.status(404).send('Deu merda');
  }

  res.send(foundUser);
});

app.post('/api/users', (req, res) => {
  const id = Math.max(...users.map(user => user.id));

  const newUser = {
    id: id,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);
  res.send(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const foundUser = users.find(user => user.id === parseInt(req.params.id));
  const schema ={
    name: Joi.string().required(),
    email: Joi.string().required()
  }
  const validation = Joi.validate(req.body, schema);
      

  if(validaton.error){
    return res.status(400).send(validation.error.details[0].message);
  }


  if (!foundUser){
    return res.status(404).send('Amigo, cancela!');
  }

  // if(!req.body.name || !req.body.email){
  //    return res.status(400).send('Precisa incluir nome e email');
  // }
  foundUser.name= req.body.name;
  foundUser.email =req.body.email;
  res.send(foundUser);
});



 app.delete('/api/users/:id', (req, res) => {
  const foundUser = users.find(user => user.id === parseInt(req.params.id));
  if (!foundUser) {
    return res.status(404).send('Amigo, cancela!');
  }
  const index = users.indexOf(foundUser)
  if( index > -1 ){
    users.splice(index,1)
    res.send(foundUser)
  }
 });



// app.put('caminho_para_atualizar_um_usuário', (req, res) => {
//   // Procure o usuário a partir do id
//   // Se não for encontrado, emita um erro que condiz e uma mensagem
//   // Se for encontrado, faça a validação dos campos obrigatórios
//   // Se estiver inválido, retorne um status que condiz e uma mensagem
//   // Se for válido, atualize o usuário encontrado a partir do id com os parâmetros recebidos
//   // Retorne o usuário atualizado
// });

// app.delete('/api/users/:id', (req, res) => {
// });

// const schema = {
//   title: Joi.string().min(3).required(),
//   description: Joi.string().min(3).required(),
// }
// const validation = Joi.validate(params, schema);
//
// if (validation.error) {
//   throw new PostitError(validation.error.details[0].message, 404);
// }

app.listen(3000, () => console.log('Ouvindo na porta 3000...'));
