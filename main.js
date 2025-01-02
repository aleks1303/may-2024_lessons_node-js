const express = require('express')
const {response} = require("express");
const app = express()

const users = [
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
app.post('/users',(req,res) => {
    const user = req.body;
    res.json(user)
})

// create users -> users method (POST);
// get-list-users -> users method (POST);
// get-user-by-id -> user/:id method (POST);
// update-user -> user/:id method (PUT);
// delete-user -> user/:id method (DELETE);

app.listen(3000)