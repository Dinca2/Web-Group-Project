const open_login = document.getElementById("item_button_signin").addEventListener("click", openLogin);
const close_login = document.getElementsByClassName("login-cancel")[0];
if(close_login) {
  close_login.addEventListener("click", closeLogin);
}

function openLogin() {
  closeSignUp();
  document.getElementById("signin").style.display = "block";
}
function closeLogin() {
  document.getElementById("signin").style.display = "none";
}


const open_signup = document.getElementsByClassName("sign-up-button")[0];
if(open_signup) {
  open_signup.addEventListener("click", openSignUp);
}
const open_signup2 = document.getElementById("item_button_signup");
if(open_signup2) {
  open_signup2.addEventListener("click", openSignUp);
}
const close_signup = document.getElementsByClassName("sign-up-cancel")[0];
if(close_signup) {
  close_signup.addEventListener("click", closeSignUp);
}

function openSignUp() {
  closeLogin();
  document.getElementById("signup").style.display = "block";
}
function closeSignUp() {
  document.getElementById("signup").style.display = "none";
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

let petCount = 0;

function addPet() {
  closeAddPet();
  let petName = document.getElementById("name");
  let petImg = document.getElementById("image");
  let petDes = document.getElementById("description");
  let pets = document.getElementsByClassName("pets")[0];
  
  let newPet = document.createElement("div");
  newPet.setAttribute("id", 0);
  
  let newPetName = document.createElement("h1");
  newPetName.textContent = petName.value;
  
  let newPetImg = document.createElement("img");
  newPetImg.src = "images/Toasty.jpg"
  newPetImg.setAttribute("width", "10%");
  newPetImg.setAttribute("height", "10%");
  
  let newPetDes = document.createElement("p");
  newPetDes.textContent = petDes.value;
  
  let editBtn = document.createElement("button");
  editBtn.setAttribute("class", "edit");
  editBtn.textContent="Edit";
  
  let removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "remove");
  removeBtn.textContent="Remove";
  
  let uploadBtn = document.createElement("button");
  uploadBtn.setAttribute("class", "upload");
  uploadBtn.textContent= "Upload";
  let br = document.createElement("br");
  newPet.appendChild(newPetName);
  newPet.appendChild(newPetImg);
  newPet.appendChild(newPetDes);
  newPet.appendChild(editBtn);
  newPet.appendChild(br);
  newPet.appendChild(removeBtn);
  newPet.appendChild(br);
  newPet.appendChild(uploadBtn);
  
  pets.appendChild(newPet);
  pets.style.display = "block";
  const remove_pet = document.getElementsByClassName("remove")[0].addEventListener("click", removePet);
  const edit_pet = document.getElementsByClassName("edit")[0].addEventListener("click", editPet);
  
  petCount+=1;
}

function removePet() {
  
  document.getElementById("0").remove();
  petCount = petCount - 1;
  addPetButton();
}

function editPet() {
  removePet();
  closeAddPetButton();
  openAddPet();
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



const submit = document.getElementsByClassName("submit-btn")[0].addEventListener("click", addPetButton);
const closeAddPetBtn = document.getElementsByClassName("add-pet-button")[0].addEventListener("click", closeAddPetButton);
function closeAddPetButton() {
  document.getElementsByClassName("add-pet-button")[0].style.display = "none";
}
function addPetButton() {
  closeLogin();
  closeSignUp();
  document.getElementsByClassName("add-pet-button")[0].style.display = "block";
}