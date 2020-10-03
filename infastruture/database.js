const mongoose = require('mongoose')

const db ={
    url: `mongodb+srv://admin:admin@cluster0-jrxnz.mongodb.net/${process.env.DB_NAME}?retryWrites=true`,
    options:{
        // userNewUrlParser:true,
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    }
}

mongoose.connect(db.url,db.options)

module.exports = mongoose