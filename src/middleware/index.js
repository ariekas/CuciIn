const {checkToken} = require('./auth/checkToken')
const {checkPassword,} = require('./crud/checkPassword')
const {notFound} = require('./notFound/index')
const {restrictTo} = require('./crud/restrictTo')
module.exports = {
    auth:{
      checkToken,
      checkPassword,
    },
    crud:{
      restrictTo

    },
    notFound:{
        notFound
    },
   
}
