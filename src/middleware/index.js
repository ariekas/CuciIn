const {checkToken} = require('./auth/checkToken')
const {checkField,} = require('./crud/checkField')
const {notFound} = require('./notFound/index')
const {restrictTo} = require('./crud/restrictTo')
module.exports = {
    auth:{
      checkToken,
      checkField,
    },
    crud:{
      restrictTo

    },
    notFound:{
        notFound
    },
   
}
