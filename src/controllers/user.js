const userService = require('../services/user')

exports.createUser = async (req, res) => {
    try {
        const user = await userService.create(req.body)
        return res.status(200).json({
            message: 'User Created Success',
            data: user
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getUser = async (_req, res) => {
    try {
        const users = await userService.getAll()
        res.status(200).json({
            message: 'Get All Users',
            data: users
        })
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

exports.editUser = async (req, res) => {
    try {
        const user = await userService.edit(req.params.id, req.body)
        res.status(200).json({
            message: 'User Edited Success',
            date: user
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await userService.delete(req.params.id)
        res.status(200).json({
            message: 'User Deleted Success',
            data: user
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}