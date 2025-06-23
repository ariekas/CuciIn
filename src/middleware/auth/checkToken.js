const jwt = require('jsonwebtoken')
const prisma = require('../../config/dataBase')

exports.checkToken = async (req, res, next) => {
   try {
    const checkToken = req.headers.authorization

    if(!checkToken || !checkToken.startsWith('Bearer')){
        return res.status(401).json({message: 'Unauthorized: No Token Provided'})
    }

    const token = checkToken.split(' ')[1]
    const decoded = jwt.verify(token, prosecc.env.JWT_TOKEN)

    const user = await prisma.user.findUnique({
        where: {id}
        select: {
            id: true,
            username: true,
            email: true,
            role: true,
            is_active: true
        }
    })

    if(!user || !user.is_active){
        return res.status(401).json({
            message: 'User not found or inactive'
        })
    }

    req.user = user
    next()
   } catch (error) {
    return res.status(401).json({message: 'Unauthorized: Invalid Token'})
   }
}


  