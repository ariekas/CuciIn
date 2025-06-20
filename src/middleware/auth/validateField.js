exports.validateField = async (req, res, next) => {
    const { username, email, password, fullName } = req.body;
    if (!username || !email || !password || !fullName) {
      return res.status(400).json({ message: 'All field must be have value' });
    }

    if(password.leght < 6){
        return res.status(400).json({message: 'Password minimal 6 karakter'})
    }

    next()
}