const passport = require('passport');
const jwtLocal = require('passport-jwt').Strategy;
const ExtractJwt= require('passport-jwt').ExtractJwt;
const User= require('../model/User')

const opts={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'shubham'
};

passport.use(new jwtLocal(opts,async (payLoad,done)=>{
    try{
        const user= await User.findById(payLoad._id);
        if(user){
            return done(null,user);
        }else{
            return done(null,false)
        }
    }catch(err){
        console.log("There is Error while Fetching User ",err);
        return;
    }  
}));


module.exports= passport;