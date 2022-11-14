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
