const express = require('express')
const dotenv = require('dotenv')
const {read, write} = require('./fs.service.js')
dotenv.config() // {path: '.env'} можна прописати шлях, якщо файл конфігурації лежить не в корені
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));



// app.get('/users', async (req, res) => {
//     const users = await read();
//     res.json(users)
// });
//
//  // додаємо user
// app.post('/users',async (req,res) => {
//     const users = await read();
//     const newUser = {
//         id: users.length ? users[users.length - 1].id + 1 : 1,
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     }
//     users.push(newUser);
//     await write(users);
//     res.status(201).json(newUser);
// });
//
// // знаходимо user по id
// app.get('/users/:userId', (req, res) => {
//     // console.log('params: ', req.params)
//     // console.log('query: ', req.query)
//     // console.log('body: ', req.body)
// const user = users.find(user => user.id === Number(req.params.userId));
// res.json(user)
// });
//
// // видаляємо user
// app.delete('/users/:userId', (req, res) => {
//     users = users.filter(user => user.id !== Number(req.params.userId));
//     res.sendStatus(204)
// });

// CRUD
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

// create users -> users method (POST);
// get-list-users -> users method (POST);
// get-user-by-id -> user/:id method (POST);
// update-user -> user/:id method (PUT);
// delete-user -> user/:id method (DELETE);
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})