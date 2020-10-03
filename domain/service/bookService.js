const Book = require('../model/book');
const Host =require('../model/host')
const User = require('../model/user')


const bookService = {
    getBookByIdHost : async (idHost)=>{
        const listBook = await Book.find({idHost:idHost})

        const listUserId = listBook.map(item => item.idUser)
        User.find({id: {$in: listUserId}})
        return listBook.map(async item=>({
            ...item,
            user: await User.findById({idUser:item.idUser}).select({"hash":0,"salt":0,"stayListId":0}),
            host: await Host.findById({idHost}).select({"hash":0,"salt":0,"stayListId":0})
        }))
    },

    getBookByIdUser :async (idUser)=>{
        const listBook =await Book.find({idUser:idUser})
        return listBook.map(item=>({
            ...item,
            user:await User.findById(idUser).select({"hash":0,"salt":0,"stayListId":0}),
            host:await Host.findById({idHost:item.idHost}).select({"hash":0,"salt":0,"stayListId":0})
        }))
    }

    
}


module.exports = bookService