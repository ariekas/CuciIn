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

exports.getById = async () => {
    return prisma.discount.findUnique({
        where: {id}
    })
}
