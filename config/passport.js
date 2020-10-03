const passport =require('passport')
const LocalStrategy = require('passport-local')
const Users =require('../domain/model/user')

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField:'password'
        },(email,password,done) => {
            Users.findOne({email}).then(user =>{
                if(!user || !user.validPassword(password)){
                    return done(null,false,{
                        err: 'email or password is invalid'
                    });
                }
                return done(null, user)
            });
        }),
    
)

module.exports = passport