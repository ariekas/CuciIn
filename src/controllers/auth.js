const authService = require('../services/auth')

exports.login = async (req, res) => {
const {email, password} = req.body

try {
    const login = await authService.login(email, password)

    res.status(200).json({
        message: 'Login Success',
        data: login 
    })
} catch (error) {
    res.status(400).json({message: error.message})
}
}