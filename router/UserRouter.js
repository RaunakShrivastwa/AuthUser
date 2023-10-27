const express = require('express');
const userController= require('../controller/userController')
const passport = require('passport')

const router= express.Router();

router.post('/save',userController.save);
// router.get('/getAll',passport.authenticate('jwt',{session:false}),userController.getAll);
router.get('/getAll',passport.cheakAuthentication,userController.getAll);

router.post('/login/jwt',userController.login_jwt)
router.post('/login',passport.authenticate('local'),userController.login);
router.get('/logout',userController.logout)


module.exports= router;