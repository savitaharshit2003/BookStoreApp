import jwt from 'jsonwebtoken'
import User from '../models/users.js'

const protectRoute=async (req,res,next)=>{
    try {
         const token = req.header('Authorization').replace('Bearer', '');
         if(!token) return res.status(401).json({message:'No authentication, access Denied'});
         const decoded= jwt.verify(token,process.env.JWT_SECRET);
         const user= await User.findById(decoded.userId).select('-password');
         if(!user) return res.status(401).json({message:'Token is not valid'});
         req.user=user;
         next();
    } catch (error) {
         console.log('Authentication Error',error);
        res.status(500).json({message:'Token is not valid'});
    }

}

export default protectRoute;