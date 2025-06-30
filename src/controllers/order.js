const orderService = require('../services/order')

exports.createOrder = async (req, res) => {
    try {
        console.log("req.user:", req.user);
        const customer_id = req.user.id;
    const order = await orderService.create({ ...req.body, customer_id });
        res.status(200).json({
            message: "Order Created Success",
            data: order
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getUserOrder = async (req, res) => {
  try {
    const order = await orderService.getAllByCustomer(req.user.id)
    res.status(200).json({
        message: `get data order user ${req.user.username}`,
        data: order
    })
  } catch (error) {
    res.status(400).json({message: error.message})
  }  
} 