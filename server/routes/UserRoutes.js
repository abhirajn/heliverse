const express = require('express');
const User  = require('../modals/UserModal')
const router = express.Router();

router.post('/usersinfo' ,async(req,res)=>{
    
   const r =  await User.find({});
  const gender  = req.body.gender;
  const avail = req.body.avail;
  const dom = req.body.domain

  const tdomain = [
    "IT",
    "Sales",
    "Marketing",
    "Finance",
    "Management",
    "UI Designing",
    "Business Development"
  ];
    
  var remainingDomains = []
  if(dom.length > 0){
     remainingDomains = tdomain.filter(domain => dom.indexOf(domain) === -1);
  }

//   console.log(remainingDomains)

  var filterdata = r;
  if(gender != ""){
filterdata =  filterdata.filter(d=> d.gender === gender)
  }
  if(avail != null){
    filterdata =  filterdata.filter(d=> d.available === avail)
  }

  if(remainingDomains.length > 0){

    for(var i = 0; i  < remainingDomains.length ; i++){
        filterdata = await filterdata.filter(d=> d.domain !== remainingDomains[i])
    }
    // filterdata =  filterdata.filter(d=> d.domain !== "Business development")
  }
  
   if(r){
    res.send(filterdata);
   }else{
    res.send("error while fetching")
   }
})

router.get('/users/:id' , async(req ,res)=>{
    const temp = await req.params.id;
    const r = await User.find({'id' : temp});
    if(r){
        res.status(200).json(r);
    }else{
        res.status(400).json("error");
    }
    
})

router.post('/users' , async(req , res)=>{
    const obj = req.body;
    const r = await User.find({});
    obj.id = r.length+1;
    const newobj =await new User(obj);
    await newobj.save();
    res.send("user creater")
})


router.put('/users/:id' , async(req , res)=>{
    const up = await User.findOneAndUpdate({"id" : req.params.id} , req.body )
    if(up){
        res.send("user updated");
    }else{
        res.send("not able to update");
    }
})


router.delete('/users/:id' , async(req , res)=>{
    const del = await User.deleteOne({'id' : req.params.id});
    if(del){
        res.send("user deleted");
    }else{
        res.send("could not able to delete");
    }
})

module.exports = router;