const discountService = require('../services/discount')

exports.createDiscount = async (req, res) => {
    try {
        const discount = await discountService.create(req.body)
        res.status(200).json({
            message: 'Discount Created Success',
            data: discount
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getAllDiscount = async (__req, res) => {
    try {
        const discounts = await discountService.getAll()
        res.status(200).json({
            message: 'Get All Discounts',
            data: discounts
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateDiscount = async (req, res) => {
    try {
        const discount = await discountService.update(req.params.id, req.body)
       res.status(200).json({
        message: 'Discount Updated Success',
        data: discount
       })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteDiscount = async (req, res) => {
    try {
        const deleteDiscount = await discountService.delete(req.params.id)
        res.json({ status: 'success', message: deleteDiscount.message });
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}