const prisma = require('../config/dataBase')

exports.create = async (data) => {
    const service = await prisma.service.create({data})
    return service
}

exports.getAll = async () => {
    return prisma.service.findMany({
        orderBy: {created_at : 'desc'}
    })
}

