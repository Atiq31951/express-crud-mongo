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
        data.forEach((d, i) => {
            delete data[i].__v
            console.log('Index => ', i, data)
        })
        console.log('data => ', data)
        res.status(200).json({
            data,
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
                id: data._id,
                email: data.email,
                name: data.name,
                phone: data.phone,
                user_id: data.user_id
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
    delete req.body.id
    console.log('Req.body => ', req.body)
    EmployeeModel.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(data => {
        res.status(200).json({
            data,
            error: null
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Error occured',
            error
        })
    })
}

const deleteEmployeeById = (req, res, next) => {
    EmployeeModel.findByIdAndRemove(req.params.id)
    .then(data => {
        console.log('Delete data => ', data)
        res.status(200).json({
            message: 'Deleted',
            error: null
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Error occured',
            error
        })
    })
}

module.exports = {
    postAddEmployeeController /* /employee/add */,
    getAllEmployeeController, /* /employee */
    getEmployeeByIdController/* /employee/:id */,
    putUpdateEmployeeController,/* /employee/:id */
    deleteEmployeeById/* /employee/:id */
}