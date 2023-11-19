const express = require('express');
const Team = require('../modals/TeamModal')
const User = require('../modals/UserModal')
const router = express.Router();

router.post('/create' , async(req,res)=>{
    const mails = req.body.team
    const name = req.body.name;
    const temp = [];
    for(var i = 0 ; i < mails.length; i++){
        const user = await User.findOne({'email' : mails[i]});
        temp.push(user)
    }
   const obj = {
    "name" : name,
    "members" : temp
   }
 const robj = await new Team(obj)
  await robj.save();
    res.send("hello")
} )


router.get('/' , async(req ,res)=>{
    const responce = await Team.find({});
    res.send(responce);
})

module.exports = router;