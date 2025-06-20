const authService = require('../services/auth')

exports.login = async (req, res) => {
try {
    const login = await authService.login(req.body)

    res.status(200).json({
        message: 'Login Success',
        data: login 
    })
} catch (error) {
    res.status(400).json({message: error.message})
}
}

exports.register = async (req, res) => {
    try {
        const user = await authService.register(req.body)
        res.status(200).json({
            message: 'Register Success',
            data : user
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}