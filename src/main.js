// Create variables targetting the relevant DOM elements here 👇
var coverImageElement = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagline = document.querySelector(".tagline");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeNewButton = document.querySelector(".make-new-button");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var homeButton = document.querySelector(".home-button");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", makeCover);
randomCoverButton.addEventListener("click", makeCover);
makeNewButton.addEventListener("click", showPageHandler);
// homeButton.addEventListener("click", showHome);


// Create your event handlers and other functions here 👇
// loadingCover = new Cover {
//
// }
function toggleView(element) {
    console.log(element)
  // var element = /*document.querySelector*/(`.${elementClass}`)
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");

  } else {
    element.classList.add("hidden");
  }
}

function showPageHandler() {
  toggleView(homeView);
  toggleView(formView);
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeCover() {
  var tagline1 = descriptors[getRandomIndex(descriptors)];
  var tagline2 = descriptors[getRandomIndex(descriptors)];
  var title = titles[getRandomIndex(titles)];
  var coverImgSrc = covers[getRandomIndex(covers)];
  currentCover = new Cover(coverImgSrc, title, tagline1, tagline2);
  displayCover(currentCover);
}

function displayCover(cover) {
  coverImageElement.setAttribute("src", cover.cover)
  title.innerText = cover.title;
  tagline1.innerText = cover.tagline1;
  tagline2.innerText = cover.tagline2;
};


// use query selector to access img, title, tagline, disc1 and disc2
// on page load (eventlistener) random title, image and discriptors will appear on the page
// function that will insert the selected elements into the framework for the cover
// function that will insert the framework onto the DOM
