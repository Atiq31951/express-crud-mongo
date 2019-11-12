const EmployeeModel = require('../../Models/EmployeeModels/index')

const postAddEmployeeController = (req, res, next) => {
    const {name, email, phone, user_id} = req.body
    const Employee = new EmployeeModel({
        name,
        email,
        phone,
        user_id
    })
    Employee.save()
    .then(data=> {
        res.status(201).json({
            message: 'Contact updated',
            error: null
        })
    })
    .catch(error=> {
        res.status(500).json({
            message: 'Something error',
            error
        })
    })
    
}

const getAllEmployeeController = (req, res, next) => {
    EmployeeModel.find()
    .then(data => {
        console.log('Message => ', message, data)
        res.status(200).json({
            // message: {
            //     id,
            //     email,
            //     name,
            //     phone,
            //     user_id
            // },
            message: 'Hello',
            error: null
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something error occured',
            error
        })
    })
}

const getEmployeeByIdController = (req, res, next) => {
    EmployeeModel.findById(req.params.id)
    .then(data => {
        res.status(200).json({
            message: {
                // id: data._id,
                // email: data.email,
                // name: data.name,
                // phone: data.phone,
                // user_id: data.user_id
                name: 'Helllllo'
            },
            error: null
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something error occured',
            error
        })
    })
}

const putUpdateEmployeeController = (req, res, next) => {
    res.send('Hello from the update employee')
}

const deleteEmployeeById = (req, res, next) => {
    res.send('Hello from the delete employee')
}

module.exports = {
    postAddEmployeeController /* /employee/add */,
    getAllEmployeeController, /* /employee */
    getEmployeeByIdController/* /employee/:id */,
    putUpdateEmployeeController,/* /employee/:id */
    deleteEmployeeById/* /employee/:id */
}