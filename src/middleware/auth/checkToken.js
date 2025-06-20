const jwt = require('jsonwebtoken')
const { JWT_TOKEN } = process.env

exports.checkToken = async (req, res, next) => {
    const token = req.header.authorization?.split('')[1]
    if(!token) return res.status(400).json({message: 'Token Not Found'})

    try {
        const decoded = jwt.verify(token, JWT_TOKEN)
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).json({message: 'Token Invalid'})
    }
}

// module.exports = function restrictTo(...roles) {
//     return (req, res, next) => {
//       if (!roles.includes(req.user?.role)) {
//         return res.status(403).json({ message: 'Access Denied' });
//       }
//       next();
//     };
//   };
  