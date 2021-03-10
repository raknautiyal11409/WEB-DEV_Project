//dropdown navbar 
const dropMenu = document.getElementsByClassName('drop_menu')[0];
const mainNav = document.getElementsByClassName('main_nav')[0];

dropMenu.addEventListener('click', () => {
  mainNav.classList.toggle('active')
})


//JavaScript code for displaying larger image in html

// Get the 
var galleryPic = document.getElementById('myGallery');

// Get the images and bind an onclick event on each to insert it inside the galleryPic
// use its "alt" text as a caption
var images = document.querySelectorAll(".img-thumbnail");
var galleryPicImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let i = 0; i < images.length; i++){
  images[i].onclick = function(){
    galleryPic.style.display = "block";
    galleryPicImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the galleryPic
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the galleryPic
span.onclick = function() {
  galleryPic.style.display = "none";
} 

//-----------------------------------------------------------------------------------------


//Aler Popup 
function myFunction() {
  alert("Due to covid-19 all saftey precautions have been taken at each tourist site. Some events have also been postphoned until 20201.\nThank You.");
}


//-----------------------------------------------------------------------------------------

//validation check for email
function validate() {

  var email = document.getElementById("email").value;
  var rating = document.getElementById("rating");
  var radios = document.getElementsByName("placeNO");
  var formValid = false;
  var i = 0;

  //check email is not blank 
  if(document.getElementById("email").value == ""){
    alert("Please enter a email address");
    return false;
  }

  //correct email validation 
  if(validateEmail(email) == false){
    alert("Please enter a correct email address");
    return false;
  }

  //drop down list validtion
  if (rating.value == "") {
    //If the "Please Select" option is selected display error.
    alert("Please select rating!");
    return false;
  }


  while (!formValid && i < radios.length) {
      if (radios[i].checked) formValid = true;
      i++;        
  }

  if (!formValid) alert("Please select the number of events you have visited!");
  return formValid;
}

//validate email address
 function validateEmail(email) {

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(email);
 }
