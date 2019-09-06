const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const router = require('./routes')
app.use('/', router)
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/travell-22', {useNewUrlParser: true},()=>{
    console.log('mongodb is connected');
});

app.listen(PORT, ()=>{
    console.log('listening on port :',PORT)
})