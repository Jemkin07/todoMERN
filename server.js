const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const todoRoutes = express.Router()
const app = express()

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("")
.then(console.log("connected to Database"))
.catch(err=>{
    console.log(err)
})

todoRoutes.route('/').get(req, res)={}