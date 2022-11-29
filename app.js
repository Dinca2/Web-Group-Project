const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

const User = require('./models/user');
const userRoute = require("./routes/user.js");

const app = express();
const router = express.Router();

const publicPath = path.join(__dirname, 'build');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(cors());
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json(), urlencodedParser);

app.use('/', userRoute);

const port = 4000;

const dbURI = "mongodb+srv://dincatoo:91893max@cluster1.clh1p13.mongodb.net/?retryWrites=true&w=majority";
mongoose
.connect(dbURI)
.then((res) => {
  app.listen(port, () => console.log("Server is live at port " + port));
}).catch(err => {
  console.log(err);
});

app.use((req, res, next) => {
  res.setHeader('Access-Contorl-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST PATCH, DELETE');
    
    next();
});

app.post('/signup', async (req, res) => {
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
  
});
app.get("/login", (res, req) => {
  res.sendFile("index.html");
});

app.post("/login", async (req, res) => {
  const userLoggingIn = req.body;
  console.log('login');
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

