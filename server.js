const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const todoRoutes = express.Router()
const app = express()
const Todo = require('./models/DataModels')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("")
.then(console.log("connected to Database"))
.catch(err=>{
    console.log(err)
})

todoRoutes.route('/').get((req, res)=>{
    Todo.find((err, todo)=>{
        if(err){
            console.log(err);
        }
        else{
            res,json(todo);
        }
    })
})

todoRoutes.route('/:id').get((req, res)=>{
    const id = req.params.id;
    Todo.findById(id, (err, todo)=>{
        if(!todo){
            console.log("NOT Found")
        }
        else{
            res.json(todo)
        }
    })
})

todoRoutes.route('/add').post((req, res)=>{
    const todo = new Todo(req.body);
    todo.save()
    .then(todo=>{console.log("todo added successfully")})
    .catch(err=>console.log(err))
})