const {checkToken} = require('./auth/checkToken')
const {validateField} = require('./auth/validateField')
const {notFound} = require('./notFound/index')
module.exports = {
    auth:{
      checkToken,
      validateField
    },
    notFound:{
        notFound
    },
   
}
