const passport = require('passport');
const passPortLocal= require('passport-local').Strategy;
const User = require('../model/User');

passport.use(new passPortLocal({
    usernameField:'email'
},async (email,password,done)=>{
    try{
        const user= await User.findOne({email:email});
        console.log(user)
        if(!user || user.password != password){
            console.log("Invalide User");
            return done(null,false)
        }
        return done(null,user);
    }catch(err){
        console.log("there is Error while Finding User",err);
        return;
    }
}));

passport.serializeUser((user,done)=>{
    return done(null,user.id);
});

passport.deserializeUser(async (id,done)=>{
    const user= await User.findById(id);
    return done(null,user);
});

passport.cheakAuthentication= (req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }else{
       return res.json({
            Error: "User Not Authenticatd"
        })
    }
}

passport.setAuthentication=(req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals= req.user;
    }
}

module.exports= passport;