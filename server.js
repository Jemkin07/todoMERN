const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const todoRoutes = express.Router()
const app = express()

app.use(cors());
app.use()

mongoose.connect("")
.then(console.log("connected to Database"))
.catch(err=>{
    console.log(err)
})

