const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoutes); // => /api/places...

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(5000);



const open_login = document.getElementsByClassName("login-button")[0].addEventListener("click", openLogin);
const close_login = document.getElementsByClassName("login-cancel")[0].addEventListener("click", closeLogin);

const open_signup = document.getElementsByClassName("sign-up-button")[0].addEventListener("click", openSignUp);
const close_signup = document.getElementsByClassName("sign-up-cancel")[0].addEventListener("click", closeSignUp);


function openLogin() {
  console.log("hi")
  document.getElementById("myLogin").style.display = "block";
}
function closeLogin() {
  document.getElementById("myLogin").style.display = "none";
}


function openSignUp() {
  closeLogin();
  document.getElementById("mySignUp").style.display = "block";
}
function closeSignUp() {
  document.getElementById("mySignUp").style.display = "none";
}
