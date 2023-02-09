var express = require('express');
var router = express.Router();
const uuid =require("uuid").v4;
const Task = require("../model/taskmodel");

let LOCAL_DB=[
  {
    id:"76676755657576-75756575757575",
    title:"rohit",
    desc:"my name is rohit",
    timeline:"20 novmber"
  },
  {
    id:"76676755657576-75756575757576",
    title:"rohit",
    desc:"my name is rohit",
    timeline:"20 novmber"
  },
  {
    id:"76676755657576-75756575757577",
    title:"rohit",
    desc:"my name is rohit",
    timeline:"20 novmber"
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  Task.create((createtask))
  .then((createtask)=> {
    res.render('show',{tasks:LOCAL_DB});
  })
  .catch((err)=> res.send(err))
});

router.get('/create', function(req, res, next) {
  res.render('create');
});

router.post("/add",function(req,res,next){
  const {title,desc}=req.body;
  Task.find()

  const timeline = new Date().toLocaleDateString("en-us",{
    month:"long",
    year:"numeric",
    day:"numeric",
  });

  const Newdata = {
    id:uuid(),
    title,
    desc,
    timeline,
  }

  LOCAL_DB.push(Newdata);
  res.redirect("/")

});

router.get("/delete/:id",function(req,res,next){
  // const id = req.params.id;

  // const newdata = LOCAL_DB.filter((task)=> task.id !== id);

  // LOCAL_DB= newdata;

  // res.redirect("/");


  const id = req.params.id;

  const findedata = LOCAL_DB.findIndex((task)=> task.id === id);
  
  LOCAL_DB.splice(findedata,1);

  res.redirect("/")

});
 
router.get("/edit/:id",function(req,res,next){
  const id = req.params.id;

  const filterid = LOCAL_DB.findIndex((task)=> task.id === id);

  res.render("edit",{ajj:LOCAL_DB[filterid]});


  // const id = req.params.id;

  // const filterid = LOCAL_DB.filter((task)=> task.id === id);

  // res.render("edit",{ajj:filterid[0]})
});

router.post("/edit/:id",function(req,res,next){
  // const id = req.params.id;

  // const findIndex = LOCAL_DB.findIndex((task)=> task.id === id);

  // LOCAL_DB[findIndex]={...LOCAL_DB[findIndex],...req.body};

  // res.redirect("/");

  const id= req.params.id;

  const {title,desc}=req.body;

  const findIndex = LOCAL_DB.findIndex((task)=> task.id === id);

  const activetask ={...LOCAL_DB[findIndex],title,desc}

  LOCAL_DB[findIndex] = activetask

  res.redirect("/");
})






module.exports = router;
