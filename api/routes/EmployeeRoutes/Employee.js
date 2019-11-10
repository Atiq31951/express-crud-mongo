const express = require('express')
const route = express.Router()
const EmployeeControler = require('../../Controllers/EmployeeControllers/Employee')

// Home Page url (Get Method)
route.get ('/', EmployeeControler.getHomePageController)

// Get All Employee ( Get Method )
route.get ('/employee', EmployeeControler.getAllEmployeeController)

//  Set Employee ( Post Method )
route.post ('/employee/add', EmployeeControler.postAddEmployeeController)

//  Get Employee By ID ( Get Method )
route.get ('/employee/:id', EmployeeControler.getEmployeeByIdController)

// Delete emeployee by id

route.delete('/employee/delete/:id', EmployeeControler.deleteEmployeeById)

// Update Employee By Id (Post Method)
route.put('/employee/update/:id', EmployeeControler.putUpdateEmployeeController)

module.exports = route