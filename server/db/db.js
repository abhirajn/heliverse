const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();
const User = require('../modals/UserModal')

        const mongo = async() =>{ await mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true, useUnifiedTopology: true})}
      

       module.exports = mongo();