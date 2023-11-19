const mongoose = require('mongoose');
const User = require('./UserModal')
const teamSchema = new mongoose.Schema({
    name : String,
    members : []
})


const Team = mongoose.model('Team' , teamSchema)
module.exports = Team;