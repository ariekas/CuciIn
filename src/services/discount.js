const prisma = require('../config/dataBase')
const { pickFields } = require('../utils/pickFields')

exports.create = async (data) => {
    const discount = await prisma.discount.create({
        data
    })
    
    return discount
}

exports.getAll = async () => {
    return prisma.discount.findMany({
        orderBy: {created_at: 'desc'}
    })
}

exports.update = async (id,data) => {
    const discount = await prisma.discount.update({
        where : {id},
        data
    })
    return discount
}

exports.delete = async (id) => {
    await prisma.discount.delete({
        where: {id}
    })
    return { message : 'Discount Deleted'}
}