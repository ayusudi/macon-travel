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
    },
    dayConversion : ()=>{
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
      
        var n = weekday[d.getDay()];
        return n
    }
}