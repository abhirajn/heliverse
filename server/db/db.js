const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('../modals/UserModal')

        const mongo = async() =>{ await mongoose.connect('mongodb://127.0.0.1:27017/Heliverse' , {useNewUrlParser: true, useUnifiedTopology: true})}
      

       module.exports = mongo();