const express = require('express')
const authUserService = require('../../domain/service/authUserService')
var passport= require('passport')
var auth = require('../../config/auth')

var router = express.Router();

// router.post('/register',upload.single('image'),async (req,res)=>{
//     const {email,pass,confirmPass,name,phone} = req.body;
//     const image = req.file == null ? 'avatar_default.jpg' : req.file.filename
//     try{
//     const user = await authUserService.signUp(email,pass,confirmPass,name,`static/images/avatar/${image}`,phone);
//     res.status(200).json(user)
//     }catch(error){
//         res.status(400).json({
//             message: error.message
//         })
//     }
// })

router.post('/login',async (req,res,next)=>{
    // const {email,pass,rememberMe} = req.body;
    // try{
    //     const user = await authUserService.signIn(email,pass,rememberMe);
    //     res.status(200).json(user)
    // } catch(error){
    //     res.status(400).json({
    //         message:error.message
    //     })
    // }

    const {email,pass} = req.body
    
    if(!email  || !pass){
        
    }
    passport.authenticate("local",{session:false},(err,user,next)=>{
        if(err){
            return next(err) //truyền dc cho middeware tiếp theo or có thể return res.json() 
        }
        else if(user){
            return res.json({
                email:user.email,
                token: user.generateJWT()
            })
        }
    })(req,res,next);
})

router.get('logout',(req,res)=>{
    
})

module.exports = router;