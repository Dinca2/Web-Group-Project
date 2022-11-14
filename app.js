
const open_login = document.getElementsByClassName("login-button")[0].addEventListener("click", openLogin);
const close_login = document.getElementsByClassName("login-cancel")[0].addEventListener("click", closeLogin);


function openLogin() {
  document.getElementById("myLogin").style.display = "block";
}
function closeLogin() {
  document.getElementById("myLogin").style.display = "none";
}


const open_signup = document.getElementsByClassName("sign-up-button")[0].addEventListener("click", openSignUp);
const close_signup = document.getElementsByClassName("sign-up-cancel")[0].addEventListener("click", closeSignUp);

function openSignUp() {
  closeLogin();
  document.getElementById("mySignUp").style.display = "block";
}
function closeSignUp() {
  document.getElementById("mySignUp").style.display = "none";
}



const open_add_pet = document.getElementsByClassName("add-pet-button")[0].addEventListener("click", openAddPet);
const cancel_add_pet = document.getElementsByClassName("add-pet-cancel")[0].addEventListener("click", closeAddPet);

function openAddPet() {
  document.getElementById("pet-add").style.display = "block";
}
function closeAddPet() {
  document.getElementById("pet-add").style.display = "none";
}


//temporary code that'll get replaced later
const add_pet = document.getElementsByClassName("submit-pet")[0].addEventListener("click", addPet);
const remove_pet = document.getElementsByClassName("remove")[0].addEventListener("click", removePet);

function addPet() {
  closeAddPet()
  //temporary code that'll get replaced later
  React.getElementById("0").style.display = "block";
}

function removePet() {
  //temporary code that'll get replaced later
  document.getElementById("0").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}