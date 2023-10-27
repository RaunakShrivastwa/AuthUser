const express= require('express');
const router=express.Router();

router.use('/user',require('./UserRouter'))


module.exports=router;