const serviceService = require('../services/service')

exports.createService = async (req, res) => {
    try {
        const service = await serviceService.create(req.body)

        res.status(200).json({
            message: 'Service Created Success',
            data: service
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getAllService = async (req, res) => {
    try {
        const services = await serviceService.getAll()

        res.status(200).json({
            message: 'Get All Services',
            data: services
        })
    } catch (error) {
        res.status(200).json({message: error.message})
    }
}

exports.updateService = async (req, res) => {
    try {
        const service = await serviceService.update(req.params.id, req.body)
        res.status(200).json({
            message: 'Service Updated Success',
            data: service
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteService = async (req, res) => {
try {
    const service = await serviceService.delete(req.params.id)
    res.status(200).json({
        message: 'Service Deleted Success',
        data: service
    })
} catch (error) {
    res.status(400).json({message: error.message})
}
}