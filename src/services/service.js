const prisma = require('../config/dataBase')

exports.create = async (data) => {
    const createData = await prisma.service.create({data})
    return createData
}

exports.getAll = async () => {
    return prisma.service.findMany({
        orderBy: {created_at : 'desc'}
    })
}

exports.update = async (id, data) => {
    const updateData = await prisma.service.update({
        where: {id},
        data
    })

    return updateData
}

exports.delete = async(id) => {
    const deleteData = await prisma.service.delete({
        where: {id}
    })

    return { message: 'Request Success'}
}
 