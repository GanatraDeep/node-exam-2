const Employee = require('../Models/Employee');
const Department = require('../Models/Employee');
const app = require('express').Router();

app.get('/getemp',async function(req,res){
    const a = await Employee.find({})
    return res.render('viewemp',{a: a})
})


//insert
app.get('/insertemp',async function(req,res){
    return res.render('insertemp')
})
app.post('/insertemp',async function(req,res){
    const {name,password,email,department} = req.body;
    const ep = new Employee();
    ep.name = name
    ep.password = password
    ep.email = email
    ep.department = department

    await ep.save()
    //return res.json(ep)
    return res.render('insertemp')
})

app.post('/updateemp',async function(req,res){
    const {name,password,email,department} = req.body;
    const ep = new Employee.findById(id);
    dp.name = name
    dp.password = password
    dp.email = email
    dp.department = department

    await ep.save()
    return res.json(ep)
})

app.post('/delemp/:id',async function(req,res){
    const id = req.params.id
    const ep = new Employee.findById(id);
    return res.json(ep)
})

module.exports = app