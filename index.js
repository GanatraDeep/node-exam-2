const express = require('express');
const app = express();

app.set('view engine','ejs')
app.set('views','Views')

const Departmentcrud = require('./Routes/Departmentcrud')
const Employeecrud = require('./Routes/Employeecrud')

app.use(express.urlencoded({extended:true}))

app.use(express.json());
app.use(Departmentcrud)
app.use(Employeecrud)

app.listen(3000)
