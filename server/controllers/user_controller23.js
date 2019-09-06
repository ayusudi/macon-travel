const User = require('../model/user')
const {  signToken ,  } = require('../helper-23')
const {OAuth2Client} = require('google-auth-library');
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

    // static LoginGoogle(req,res,next){
    //     let { email , username } = req.body
    //     User.findOne({
    //         email
    //     })
    //     .then(user1=>{
    //         if(user1){
    //             res.json({
    //                 token : signToken(user1)
    //             })  
    //         }else {
    //             return User.create({
    //                 username,password : 'lol', email
    //             })
    //         }
    //     })
    //     .then(user2=>{
    //         console.log(user2)
    //         console.log('ksdmfkdmfdksmfkdsmfdksmf' , ' 121212')
    //         res.status(201).json({
    //             user : user2,
    //             message : 'Sukses Login',
    //             token : signToken(user2)
    //         })
    //     })
    //     .catch(err=>{
    //         next(err)
    //     })
    // }
    static  LoginGoogle(req,res,next){
        let data;
        let kondisi = true
        const client = new OAuth2Client("438390530813-hqkaes7ruh8js6eoc2r6cleest6jgqrh.apps.googleusercontent.com");
        client.verifyIdToken({
            idToken : req.body.id_token ,
            audience :  "438390530813-hqkaes7ruh8js6eoc2r6cleest6jgqrh.apps.googleusercontent.com"
        })
        .then(ticket=>{
            data = ticket.payload
            return User.findOne({
                email : data.email
            })
        })
        .then(user=>{
            if(user){
                kondisi = false
                let tokenUser = signToken(user._id)
                // console.log(tokenUser)
                // console.log(user.name , ' fdlskfjkdlsjfkdsljfkdlsjfdsklfjdslkfjdslkfjdsklfjkljlkj')
                res.json({
                    token : tokenUser,
                    name : user.name
                })
            }else {
                let { name , email } = data
                // console.log(data , ' ini yg penting')
                return User.create({
                    username : name , email , password : 'asal'
                })
            }
        })
        .then(data2=>{
            if(kondisi){
                // console.log('dsmfdksmf')
                // console.log(Token(data2) , ' di register biasa google')
                res.status(201).json({
                    token : signToken(data2),
                    data2,
                    message : 'sukses add data'
                })
            }
        })
        .catch(err=>{
            next(err)    
        })
    }
}

module.exports = user_controller