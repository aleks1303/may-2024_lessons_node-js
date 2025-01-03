const express = require('express')
const dotenv = require('dotenv')
dotenv.config() // {path: '.env'} можна прописати шлях, якщо файл конфігурації лежить не в корені
const {response, json} = require("express");
const app = express()



app.use(express.json());
app.use(express.urlencoded({extended:true}));

let users = [
    {id:1, name:'Maksym', email:'maks@gmail.com', password:'qwe123'},
    {id:2, name:'Eva', email:'eva@gmail.com', password:'sdf345'},
    {id:3, name:'Norman', email:'norman@gmail.com', password:'ghh567'},
    {id:4, name:'John', email:'john@gmail.com', password:'cvb567'},
    {id:5, name:'Alex', email:'alex@gmail.com', password:'awe345'},
    {id:6, name:'Anna', email:'anna@gmail.com', password:'gyu765'},
    {id:7, name:'Dina', email:'dina@gmail.com', password:'iok987'},
    {id:8, name:'Ivan', email:'ivan@gmail.com', password:'ivf345'},
    {id:9, name:'Maria', email:'maria@gmail.com', password:'vbg546'},
    {id:10, name:'Klaus', email:'klaus@gmail.com', password:'lkf435'}
]
app.get('/users', (req, res) => {
    res.json(users)
});

//  додаємо user
app.post('/users',(req,res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
   users.push(newUser)
    res.status(201).json(newUser)
});

// знаходимо user по id
app.get('/users/:userId', (req, res) => {
    // console.log('params: ', req.params)
    // console.log('query: ', req.query)
    // console.log('body: ', req.body)
const user = users.find(user => user.id === Number(req.params.userId));
res.json(user)
});

// видаляємо user
app.delete('/users/:userId', (req, res) => {
    users = users.filter(user => user.id !== Number(req.params.userId));
    res.sendStatus(204)
});

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