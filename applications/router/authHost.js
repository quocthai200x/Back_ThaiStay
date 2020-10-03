const express = require('express')
const authHostService = require('../../domain/service/authHostService')
// var multer = require('multer')
// var uuidv4 = require('uuid/v4')

// const storage = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null, "static/images/avatar")
//     },
//     filename: (req,file,callback)=>{
//         callback(null,uuidv4()+ file.originalname)
//     }
// })

// const upload =multer({storage:storage})

var router = express.Router();

// router.post('/register',upload.single('image'),async (req,res)=>{
//     const {email,pass,confirmPass,name,phone} = req.body;
//     const image = req.file == null ? 'avatar_default.jpg' : req.file.filename;
//     try{
//     const host = await authHostService.signUp(email,pass,confirmPass,name,`static/images/avatar/${image}`,phone);
//     res.status(200).json(host)
//     }catch(error){
//         res.status(400).json({
//             message: error.message
//         })
//     }
// })

router.post('/login',async (req,res)=>{
    const {email,pass,rememberMe} = req.body;
    try{
        const host = await authHostService.signIn(email,pass,rememberMe);
        res.status(200).json(host)
    } catch(error){
        res.status(400).json({
            message:error.message
        })
    }
})

router.get('logout',(req,res)=>{
    
})

module.exports = router;