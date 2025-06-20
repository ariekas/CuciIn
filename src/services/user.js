const prisma = require("../config/dataBase");
const bcrypt = require("bcrypt");

exports.create = async ({ username, email, password, role }) => {
    if (!['kurir', 'penjaga'].includes(role)){
        throw new Error('Role must be kurir or penjaga')
    }

    const checkUser = await prisma.user.findFirst({where: {OR: [{email}, {username}]}
    })
    if(checkUser) throw new Error('Email or Username already exist')

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data:{
            username,
            email,
            password: hashPassword,
            role
        }
    })

    return {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      };
}

exports.getAll = async () => {
    return prisma.user.findMany({
        where:{role:{in:['kurir', 'penjaga']}},
        select:{
            id: true,
            username: true,
            email: true,
            role: true,
            createdAt: true,
        }
    })
}