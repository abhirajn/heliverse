const mongoose = require('mongoose');
const User = require('./UserModal')
const teamSchema = new mongoose.Schema({
    name : String,
    members : [User]
})


const Team = mongoose.model('Team' , teamSchema)l
module.exports = Team;