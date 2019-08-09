const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.signUp = (req,res,next)=>{
    let email = req.body.email;
    let password = req.body.password;
    bcrypt.hash(password,10).then(hashPassword=>{
    let user = new userModel({email:email,password:hashPassword});
     return user.save();
    }).then((result)=>{
    res.status(201).json({"message":"user registerd successfully"});
    }).catch((err)=>{
      console.log(err.message);
    })
    


}


exports.login = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  userModel.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status(402).json({ "message": "Auth failed" });
    }

    bcrypt.compare(password, user.password).then((passwordMatch) => {
      if (!passwordMatch) {
        return res.status(402).json({ "message": "Auth failed" });
      }

      const token = jwt.sign({ email: email, user_id: user.id }, 'thisissupersecret', {
        expiresIn: '1h'
      });
      return res.status(200).send({
        token: token,
        message: "login succed"
      });
    }).catch((err) => {
      console.log(err);
    })

  })

}