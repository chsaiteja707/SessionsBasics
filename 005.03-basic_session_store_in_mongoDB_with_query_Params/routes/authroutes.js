const express=require('express');

const router=express.Router();

const userController=require('../controller/user');

router.get('/',userController.index);

router.get('/:value',userController.index);

router.post('/login',userController.postLogin);

router.post('/signup',userController.postSignup);

router.get('/logout',userController.postLogout);

module.exports=router;