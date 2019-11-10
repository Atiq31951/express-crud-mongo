const EmployeeModel = require('../../Models/EmployeeModels/Employee')

const getHomePageController = (req, res, next) => {
    res.send('Hello from the Homepage')
}

const getAllEmployeeController =  (req, res, next) => {
    EmployeeModel.find()
        .then(data => {
            res.status(301).json({
                message : 'Yes Found data',
                data : data,
                error : null
            })
        })
        .catch(err => {
            res.status(400).json({
                message : 'Something went wrong',
                data : null,
                error : err
            })
        })
}

const postAddEmployeeController = (req, res, next) => {
    let name = req.body.name
    let email = req.body.email
    let phone = req.body.phone
    let dev_id = req.body.dev_id
    let joining_date = req.body.joining_date
    let permanent_date = req.body.permanent_date
    let designation = req.body.designation
    let salary = req.body.salary
    
    let employeeModel = new EmployeeModel({
        name,
        email,
        phone,
        dev_id,
        joining_date,
        permanent_date,
        designation,
        salary
    })

    employeeModel.save()
        .then(data => {
            res.status(200).json({
                message : 'A new employee has been added',
                data,
                error : null
            })
        })
        .catch(err => {
            res.status(400).json({
                message : 'Something problem happened in the db',
                data : null,
                error : err
            })
        })
}

const getEmployeeByIdController = (req, res, next) => {
    const id = req.params.id
    EmployeeModel.findById(id)
        .then(data => {
            if( data ){
                res.status(200).json({
                    message : 'Information of selected employee is given',
                    data,
                    error : null
                })
            } else {
                res.status(501).json({
                    message : 'Information of selected employee most probably deleted',
                    data : null,
                    error : {
                        message : 'Information of selected employee most probably deleted'
                    }
                })
            }
        })
        .catch(err => {
            res.status(501).json({
                message : 'Something problem with the database',
                data : null,
                error : err
            })
        })
}

const deleteEmployeeById = (req, res, next) => {
    let id = req.params.id
    EmployeeModel.findByIdAndDelete(id)
        .then( data => {
            if( data ) {
                res.status(200).json({
                    message : 'Employee information has been deleted',
                    data : {deleted : true},
                    error: null
                })
            } else {
                res.status(200).json({
                    message : 'Sorry there is no data any more of this employee',
                    data : {deleted : false},
                    error: {
                        message : 'No data found of this employee'
                    }
                })
            }
        })
        .catch( err => {
            res.status(501).json({
                message : 'Something probelm with deleting data from database',
                data : null,
                error : err
            })
        })
}

const putUpdateEmployeeController = (req, res, next) => {
    let id = req.params.id
    let updatedEmployee = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        dev_id: req.body.dev_id,
        joining_date: req.body.joining_date,
        permanent_date: req.body.permanent_date,
        designation: req.body.designation,
        salary: req.body.salary
    }
    EmployeeModel.findByIdAndUpdate(id, { $set : updatedEmployee })
        .then(data => {
            res.status(200).json({
                message : 'Information of selected employee is updated',
                data,
                error : null
            })
        })
        .catch(err => {
            res.status(501).json({
                message : 'Something problem with the database',
                data : null,
                error : err
            })
        })
}

module.exports = {
    getHomePageController,/* '/' */
    getAllEmployeeController/* /employee */,
    postAddEmployeeController/* /employee/add */,
    getEmployeeByIdController/* /employee/:id */,
    deleteEmployeeById,/* /employee/delete/:id */
    putUpdateEmployeeController/* /employee/update/:id */
}