const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const UserRoutes = require('./routes/UserRoutes')
require('./db/db')
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api' , UserRoutes);


app.get('/' , (req ,res)=>{
    res.send("hello")
})

app.listen(3000 , ()=>{
    console.log('server started');
})
