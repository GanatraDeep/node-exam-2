const Department = require('../Models/Department');
const app = require('express').Router();

//view
app.get('/getdept',async function(req,res){
    const a = await Department.find({})
    return res.render('viewdept',{a: a})
})


//insert
app.get('/insertdept',async function(req,res){
    return res.render('insertdept')
})
app.post('/insertdept',async function(req,res){
    const {name} = req.body;
    const dp = new Department();
    dp.name = name

    await dp.save()
    //return res.json(dp)
    return res.render('insertdept')
})

app.post('/updatedept',async function(req,res){
    const {id,name} = req.body;
    const dp = new Department.findById(id);
    dp.name = name

    await dp.save()
    return res.json(dp)
})

app.post('/deldept/:id',async function(req,res){
    const id = req.params.id
    const dp = new Department.findById(id);
    return res.json(dp)
})

module.exports = app