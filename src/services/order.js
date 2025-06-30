const prisma = require('../config/dataBase')
const calculateDiscount = require('../utils/calculateDiscount')
const { customAlphabet } = require('nanoid');

const generateOrderNumber = () => {
    const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 3);
    return `ORD-${nanoid()}`;
  };

exports.create = async (data) => {
    const {
        customer_id,
        service_id,
        estimated_weight,
        discount_id,
        special_notes,
        payment_method
    } = data

    const service = await prisma.service.findUnique({where: {id: service_id}})
    if(!service || !service.is_active) throw new Error('Service not found')

    const subtotal = service.price_per_kg * estimated_weight

    let discountAmount = 0

    if(discount_id){
        const discount = await prisma.discount.findUnique({where: {id: discount_id}})
        if(discount && discount.is_active){
            discountAmount = calculateDiscount({
                discount_type: discount.discount_type,
                discount_value: discount.discount_value,
                max_discount: discount.max_discount,
                subtotal
            })

            await prisma.discount.update({
                where: {id: discount_id},
                data:{ used_count: {increment: 1}}
            })
        }
    }

    const total = subtotal - discountAmount

    const order = await prisma.order.create({
        data:{
            order_number: generateOrderNumber(),
            customer_id,
            service_id,
            estimated_weight,
            special_notes,
            payment_method,
            subtotal,
            discount_amount: discountAmount,
            total_amount: total,
        }
    })

    return order
}

exports.getAllByCustomer = async (customer_id) => {
    return prisma.order.findMany({
      where: { customer_id },
      include: {
        service: true,
        discount: true
      },
      orderBy: { created_at: 'desc' }
    });
  };