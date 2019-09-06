const User = require('../model/user')
// const {  compare ,  signToken } = require('../helpers')
class user_controller {
    static Register(req,res,next){
        let {username, password , email} = req.body
        User.create({
            username,password, email
        })
        .then(user=>{
            // res.json(user)
            res.json({
                token : signToken(user) // setelah register langsung terlogin
            })  
        })
        .catch(err=>{
            next(err)
        })
    }

    static login(req,res,next){
        let {  email , password } = req.body;
        User.findOne({
            email
        })
        .then(user=>{
            if(user){
                if(compare(password , user.password)){
                    res.json({
                        token : signToken(user)
                    })
                }
                else {
                    res.status(403).json({
                        message : 'Username or Password Not Found'
                    })
                    console.log(password , user.password)
                    console.log('password salah')
                }
            }
            else {
                console.log('username salah')
                res.status(403).json({
                    message : 'Username or Password Not Found'
                })
            }
        })
        .catch(err=>{
            next(err)
        })
    }

    static LoginGoogle(req,res,next){
        let { email , username } = req.body
        User.findOne({
            email
        })
        .then(user1=>{
            if(user1){
                res.json({
                    token : signToken(user1)
                })  
                console.log('ksdmfkdmfdksmfkdsmfdksmf' , '  dfdssf')
            }else {
                return User.create({
                    username,password : 'lol', email
                })
            }
        })
        .then(user2=>{
            console.log('ksdmfkdmfdksmfkdsmfdksmf' , ' 121212')
            res.status(201).json({
                user : user2,
                message : 'Sukses Login',
                token : signToken(user2)
            })
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = user_controller