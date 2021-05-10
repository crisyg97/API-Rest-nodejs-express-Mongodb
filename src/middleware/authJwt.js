const index = {};

module.exports = verifyToken = (req, res, next) => {
    const token = req.headers["X-Access-Token"];

    if(!token){
        return res.status(403).json({message:"no token provided"});
    }
}

module.exports = index;
