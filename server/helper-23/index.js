const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    hashingPassword(password){
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        return hash
    },
    compare(passwordInput,passwordDb){
       return bcrypt.compareSync(passwordInput, passwordDb);
    },
    signToken(data){
        var token = jwt.sign({ data }, 'abcdefgh');
        return token
    },
    TokenVerify : (token)=>{
        return jwt.verify(token , 'abcdefgh')
    }
}