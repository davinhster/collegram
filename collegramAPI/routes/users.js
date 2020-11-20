const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const mongoosoe = require('mongoose');




// @Route POST /users/register
// @desc Register a new user
// @access Public

// router.route('/register').post((req,res)=>{
//     const BCRYPT_SALT_ROUNDS = 12;
//     const {email, password} = req.body;

//     //Check for existing user
//     User.findOne({email})
//         .then(user=>{
//             if(user) return res.status(400).json({msg: 'User already exists'});

//             let hashedPassword = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);

//             //create newUser
//             const newUser = new User({firstName, lastName, hashedPassword, email});

//             //save newUser
//             newUser.save()
//                 .then(user=>{
//                     jwt.sign(
//                         {
//                             user_id: user.id
//                         },
//                          process.env.JWT_SECRET,
//                          (err, token) =>{
//                              if(err) throw err;
//                              res.json({
//                                  token,
//                                  user:{
//                                      firstName: user.firstName,
//                                      lastName: user.lastName,
//                                      user_id: user.id,
//                                      email: user.email
//                                  }
//                              })
//                          }

//                     )
//                 })
//                 .catch(err => res.status(400).json('Erorr: ' + err))
//         })
//         res.send("User credentials submitted");
// });


router.route('/register').post((req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const hashedPassword = req.body.hashedPassword;
    const email = req.body.email;
  
    const newUser = new User({
      firstName,
      lastName,
      hashedPassword,
      email

    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//restore atlas uri once done
//  ATLAS_URI = mongodb+srv://collegramUser:ilovecmpe133@collegram.vokci.mongodb.net/<dbname>?retryWrites=true&w=majority
// router.route('/register').get((req,res)=>{
    

//     res.send("User credentials submitted");
// });

module.exports = router;
