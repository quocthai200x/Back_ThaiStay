const express= require('express');
const bookService = require('../../domain/service/bookService')

const router = express.Router();

router.post('user/booking',async (req,res)=>{
    try{
        const result = saveNewBook(req.body)
    }catch(error){
        
    }
})


router.get('user/booking',async (req,res)=>{
    try{
        const {idUser} = req.body;
        const result = await bookService.getBookByIdUser(idUser)
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }
})