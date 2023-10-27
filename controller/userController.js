const User= require('../model/User');
const jsonToken= require('jsonwebtoken')

module.exports.save= async (req,res)=>{
    try{
          const user= await User.create(req.body);
          return res.json({
            Message: 'User Created!!!',
            User: user
          })
    }catch(err){
        console.log("There is error With Creating User",err);
        return;
    }
}

module.exports.getAll= async (req,res)=>{
    try{
         return res.json({
            Users: await User.find({})
         })
    }catch(err){
        console.log("There is error finding user ",err);
        return;
    }
}

module.exports.login_jwt= async (req,res)=>{
    try{
         const user= await User.findOne({email:req.body.email})
         if(!user || user.password !=req.body.password){
            return res.json({
                Message: 'User Invalide'
            })
         }
         return res.json({
            token: jsonToken.sign(user.toJSON(),'shubham',{expiresIn:3000})
         })
    }catch(err){
        console.log("There is error with finding user",err);
        return;
    }
}

module.exports.login=(req,res)=>{
    return res.json({
        Message: "User Login Successfully"
    })
}

module.exports.logout=(req,res)=>{
    req.logout(()=>{
        return res.json({
            Message: 'User logout'
        })
    })
}