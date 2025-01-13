const express = require('express')
const dotenv = require('dotenv')
const {read, write} = require('./fs.service.js')
dotenv.config() // {path: '.env'} можна прописати шлях, якщо файл конфігурації лежить не в корені
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));

// всі запити треба класти в try-catch

app.get('/users', async (req, res) => {
   try {
       const users = await read();
       res.json(users)
   }catch (e) {
       res.status(500).json({error: e.message})
   }
});

 // додаємо user
app.post('/users',async (req,res) => {
    try{
        if(!req.body.name || req.body.name.length < 4) {
            return res.status(400).json('Name is required and should be minimum 3 symbols')
        }
        if(!req.body.email || req.body.email.includes('@')) {
            return res.status(400).json('Email is required')
        }
        if(!req.body.password || req.body.password.length < 7) {
            return res.status(400).json('Password is required and should be minimum 8 symbols')
        }
        const users = await read();
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        users.push(newUser);
        await write(users);
        res.status(201).json(newUser);
    }
catch (e) {
        res.status(500).json({error: e.message})
    }
});

// знаходимо user по id
app.get('/users/:userId', async (req, res) => {
    try{
        const users = await read();
        const user = users.find(user => user.id === Number(req.params.userId));
        res.json(user);
    } catch (e) {
        res.status(500).json({error: e.message})
    }
});

// update
app.put('/users/:userId', async (req, res) => {
    try{
        if(!req.body.name || req.body.name.length < 3) {
           return res.status(400).json('Name is required and should be minimum 3 symbols')
        }
        if(!req.body.email || req.body.email.includes('@')) {
            return res.status(400).json('Email is required')
        }
        if(!req.body.password || req.body.password.length < 8) {
            return res.status(400).json('Password is required and should be minimum 8 symbols')
        }

        const users = await read();
        const index = users.findIndex(user => user.id === Number(req.params.userId));
        if(index === -1) {
            return res.status(404).json({message:'User not found'});
        }
        const user = users[index]
           user.name =req.body.name;
           user.email = req.body.email;
           user.password = req.body.password;

        await write(users);
        res.status(201).json(user)
    }
    catch (e) {
        res.status(500).json({error: e.message})
    }
})


//
// // видаляємо user
app.delete('/users/:userId', async (req, res) => {
    try{
        const users = await read();
        const index = users.findIndex(user => user.id === Number(req.params.userId));
        if(index === -1) {
        return res.status(404).json({message:'User not found'});
        }
        users.splice(index, 1)
        await write(users);
        res.sendStatus(204);
    }
catch (e) {
        res.status(500).json({error: e.message})
    }
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