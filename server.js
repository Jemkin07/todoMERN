const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const todoRoutes = express.Router()
const app = express()
const Todo = require('./models/DataModels');

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

todoRoutes.route('/update/:id').post((req, res)=>{
    Todo.findById(req.params.id, (err, todo)=>{
        if(!todo){
            console.log("data not found")
        }
        else{
            Todo.todo_title = req.body.todo_title;
            Todo.todo_description = req.body.todo_description;
            Todo.todo_priority = req.body.todo_priority;
            Todo.todo_completed = req.body.todo_completed;
            todo.save()
            .then(todo=>{
                res.json("todo updated")
            })
            .catch(err=>{
               res.json(err);
            })
        }
    })
})