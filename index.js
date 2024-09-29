//git slider items
var sliderIcons = Array.from(document.querySelectorAll(".contanir img"));
//git number of slides
var numSlides = sliderIcons.length;
//set Frist slide
var fristSlide = 1;
//slide number element
var slideNumber = document.getElementById("num");
//Previous and next buttons
var preButton = document.getElementById("pre");
var nextButton = document.getElementById("next");
//click on Previous and next buttons
nextButton.onclick = nextSlide;
preButton.onclick = preSlide;
// Create The Main UL Element
var pagElement = document.createElement("ul");
// Set ID On Created Ul Element
pagElement.setAttribute("id", "pag-ul");
// Create List Items Based On Slides Count
for (var i = 1; i <= numSlides; i++) {
  //Created li
  var pagItem = document.createElement("li");
  // Set custom atrribute
  pagItem.setAttribute("data-index", i);
  //set item content
  pagItem.appendChild(document.createTextNode(i));
  // Append Items to The Main Ul List
  pagElement.appendChild(pagItem);
  // Add The Created UL Element to The Page
  document.getElementById("indicatore").appendChild(pagElement);
}
// Get The New Created UL
var newPagUl = document.getElementById("pag-ul");
//git pagination items
var pagBullets = Array.from(document.querySelectorAll("#pag-ul li"));
// Loop Through All Bullets Items
for (var i = 0; i < pagBullets.length; i++) {
  pagBullets[i].onclick = function () {
    fristSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}
// Trigger The Checker Function
theChecker();
// next slide function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    fristSlide++;
    theChecker();
  }
}
// previous slide function
function preSlide() {
  if (preButton.classList.contains("disabled")) {
    return false;
  } else {
    fristSlide--;
    theChecker();
  }
}
// Create The Checker Function
function theChecker() {
  // Set The Slide Number
  slideNumber.textContent = "Slide #" + fristSlide + " of " + numSlides;
  // Remove All Active Classes
  removeActives();
  // Set Active Class On Frist Slide
  sliderIcons[fristSlide - 1].classList.add("active");
  // Set Active Class on Frist Pagination Item
  newPagUl.children[fristSlide - 1].classList.add("active");
  // Check if Current Slide is The First
  if (fristSlide == 1) {
    // Add Disabled Class on Previous Button
    preButton.classList.add("disabled");
  } else {
    // remove Disabled Class from Previous Button
    preButton.classList.remove("disabled");
  }
  // Check if Current Slide is The List
  if (fristSlide == numSlides) {
    // Add Disabled Class on Next Button
    nextButton.classList.add("disabled");
  } else {
    // remove Disabled Class from Next Button
    nextButton.classList.remove("disabled");
  }
}
function removeActives() {
  // Loop Through Images
  sliderIcons.forEach(function (img) {
    img.classList.remove("active");
  });
  // Loop Through bullets
  pagBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
