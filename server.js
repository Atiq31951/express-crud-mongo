const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const cors = require('cors')
const employeeRoute = require('./api/Routes/EmployeeRoutes/Employee')
const mongoose = require('mongoose')
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(morgan('dev'))
// app.use(cors)
app.use(employeeRoute)

mongoose.connect('mongodb://localhost/db_employee')

app.listen(PORT, ()=> console.log(`server is running on ${PORT}`))
