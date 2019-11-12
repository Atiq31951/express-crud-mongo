const express = require('express')
const route = express.Router()
const EmployeeControler = require('../../Controllers//EmployeeControllers/index')

//  Set Employee ( Post Method )
route.post ('/add', EmployeeControler.postAddEmployeeController)

// Get all employee url (Get Method)
route.get ('/', EmployeeControler.getAllEmployeeController)

// Get Employee By id ( Get Method )
route.get ('/:id', EmployeeControler.getEmployeeByIdController)

// Update Employee By Id (Post Method)
route.put('/:id', EmployeeControler.putUpdateEmployeeController)

// Delete emeployee by id
route.delete('/:id', EmployeeControler.deleteEmployeeById)

module.exports = route