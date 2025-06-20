const {checkToken} = require('./auth/checkToken')
const {notFound} = require('./notFound/index')
module.exports = {
    auth:{
      checkToken
    },
    notFound:{
        notFound
    },
   
}
