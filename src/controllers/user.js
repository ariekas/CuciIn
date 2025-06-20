const userService = require('../services/user')

exports.createUser = async (req, res) => {
    try {
        const user = await userService.create(req.body)
        res.status(200).json({
            message: `User Success Created`,
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