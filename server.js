const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const cors = require('cors')
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(morgan('dev'))
// app.use(cors)
mongoose.connect('mongodb://localhost/db_employee')

// Routes to be used
const employeeRoute = require('./api/routes/EmployeeRoutes/index')
// const userRoute = require('./api/routes/UserRoutes/index')

// Routes Register
app.use('/employee', employeeRoute)
// app.use('/user',userRoute)

const PORT = 3000 || process.env.PORT
app.listen(PORT, ()=> console.log(`server is running on ${PORT}`))