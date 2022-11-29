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
  newPetImg.src = "images/Toasty.jpg";
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
  if(slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";
  }
  if(dots[slideIndex-1]){
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
}

