const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const UserRoutes = require('./routes/UserRoutes')
const TeamRoutes = require('./routes/TeamRoutes')
require('./db/db')
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api' , UserRoutes);
app.use('/team' , TeamRoutes)

app.get('/' , (req ,res)=>{
    res.send("hello")
})

app.listen(process.env.PORT || 8000 , ()=>{
    console.log('server started');
})
