exports.calculateDiscount = ({discount_type, discount_value, max_discount, subtotal}) => {
    const discountAmount = 0

    if(discount_type === 'percentage'){
        discountAmount = (discount_value / 100) * subtotal
        if(max_discount){
            discountAmount = Math.min(discountAmount, max_discount)
        }
    }

    if(discount_type == 'fixed_amount'){
        discountAmount = discount_value
    }

    return Math.min(discountAmount, subtotal)
}