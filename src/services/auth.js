const prisma = require('../config/dataBase')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_TOKEN = process.env.JWT_TOKEN

exports.login = async (email, password) => {
    const user = await prisma.user.findUnique({where:{email}})
    if(!user) throw new Error('User not found')

    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword) throw new Error('Wrong password')

    const token = jwt.sign(
        {id: user.id, email: user.email, role: user.role},
        JWT_TOKEN,
        {expiresIn: '1d'}
    )

    console.log(`Token: ${token}`)
    console.log(user)

    return {
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          username: user.username,
          fullName: user.fullName
        },
      };
    }
