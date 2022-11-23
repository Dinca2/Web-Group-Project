const express = require('express');
const bodyPArser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('users');

const app = express();
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json(), urlencodedParser);

const dbURI = ""; //paste mongoDB connection string here

/*mongoose.connect(dbURI, {userNewUrlParser:true, useUnifiedTopology:true}).then((res) => {
  app.listen(process.env.PORT, () => console.log("Server is live"));
});*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
  
});

app.post('/register', async((req, res) => {
  const user = req.body;
  const takenUsername = await(User.findOne({usernmae: user.username}));
  
  if(takenUsername || takenEmail) {
    res.json({message: "Username or email has already been taken"});
  } else {
    user.passowrd = await(bcrypt.hash(req.body.passowrd,10));
    
    const dbUser =  new User({
      username: user.username.toLowerCase(),
      email:user.email.toLowerCase(),
      password:user.password
    });
    
    dbUser.save();
    res.json({message: "Success"});
  }
  
}));

app.post("/login", (req, res) => {
  const userLoggingIn = req.body;
  
  User.findOne({username: userLoggingIn.username}).then(dbUser => {
    if(!dbUser) {
      return res.json({
        message: "Invalid Username or Password"
      });
    }
    
    brypt.compare(userLogginIN.passowrd, dbUser.password).then(isCorrect => {
      if(isCorrect) {
        const payload = {
          id: dbUser._id,
          username: dbUser.usernma,
        };
        
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {expiresIn: 86400},
          (err,token) => {
            if(err) return res.json({message:err});
            return res.json({
              message: "Success",
              token: "Bearer " + token
            });
          });
        }
      });
    });
});

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"].split(' ')[1];
  
  if(token) {
    jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
      if(err) return res.json({
        isLoggedIn: false,
        message: "Failed to Authenticate"
      });
      req.user = {};
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    });
  } else {
    res.json({
      message: "Incorrect Token Given", isLoggedIn: false
    });
  }
}
app.get("/getUsername", verifyJWT, (req, res) => {
  res.json({isLoggedIn: true, username: req.user.username});
});

app.get('/login', (req, res) => {
  res.render("login");
});

app.use(express.static(__dirname));
app.listen(2345, () => console.log('Example app is listening on port 2345.'));
