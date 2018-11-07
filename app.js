'use strict';

var firstImg = document.getElementById('first');
var secondImg = document.getElementById('second');
var thirdImg = document.getElementById('third');


var previouslyDisplayed = [];
var allProducts = [];
var totalClickTracker = 0;

function Product(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}



function randomImage() {

  var firstRandomImage = Math.floor(Math.random() * allProducts.length);
  var secondRandomImage = Math.floor(Math.random() * allProducts.length);
  var thirdRandomImage = Math.floor(Math.random() * allProducts.length);

  while (secondRandomImage === firstRandomImage
    || secondRandomImage === thirdRandomImage
    || firstRandomImage === thirdRandomImage
    || previouslyDisplayed.includes(firstRandomImage)
    || previouslyDisplayed.includes(secondRandomImage)
    || previouslyDisplayed.includes(thirdRandomImage)) {

    firstRandomImage = Math.floor(Math.random() * allProducts.length);
    secondRandomImage = Math.floor(Math.random() * allProducts.length);
    thirdRandomImage = Math.floor(Math.random() * allProducts.length);

  }

  previouslyDisplayed[0] = firstRandomImage;
  previouslyDisplayed[1] = secondRandomImage;
  previouslyDisplayed[2] = thirdRandomImage
  console.log('images previously displayed ' + previouslyDisplayed);




  // Setting image source for all 3 images displayed
  firstImg.src = allProducts[firstRandomImage].filepath;
  secondImg.src = allProducts[secondRandomImage].filepath;
  thirdImg.src = allProducts[thirdRandomImage].filepath;

  firstImg.alt = allProducts[firstRandomImage].altText;
  secondImg.alt = allProducts[secondRandomImage].altText;
  thirdImg.alt = allProducts[thirdRandomImage].altText;


  //setting the amount of views for each image displayed
  allProducts[firstRandomImage].views++;
  allProducts[secondRandomImage].views++;
  allProducts[thirdRandomImage].views++;

  totalClickTracker++;


  if (totalClickTracker === 25) {
    firstImg.removeEventListener('click', randomImage);
    secondImg.removeEventListener('click', randomImage);
    thirdImg.removeEventListener('click', randomImage);

    displayResults();

  }
};

function handleClick(event) {
  console.log(event.target.alt);

  randomImage();


  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
};

function displayResults() {

  var results = document.getElementById('results');

  for (var i = 0; i < allProducts.length; i++) {
    var listViews = document.createElement('li');
    listViews.textContent = allProducts[i].views + ' views and ' + allProducts[i].votes + ' votes for the ' + allProducts[i].name;
    results.appendChild(listViews);
  }
};


function imageVote(imageSrc) {

  for (var i = 0; i < allProducts.length; i++) {
    if (imageSrc === allProducts[i].filepath) {
      allProducts[i].vote++;
    }
  }
};


new Product('bag', './assets/bag.jpg', 'bag');
new Product('banana', './assets/banana.jpg', 'banana');
new Product('bathroom', './assets/bathroom.jpg', 'bathroom');
new Product('boots', './assets/boots.jpg', 'boots');
new Product('breakfast', './assets/breakfast.jpg', 'breakfast');
new Product('bubblegum', './assets/bubblegum.jpg', 'bubblegum');
new Product('chair', './assets/chair.jpg', 'chair');
new Product('cthulhu', './assets/cthulhu.jpg', 'cthulhu');
new Product('dog-duck', './assets/dog-duck.jpg', 'dog-duck');
new Product('dragon', './assets/dragon.jpg', 'dragon');
new Product('pen', './assets/pen.jpg', 'pen');
new Product('pet-sweep', './assets/pet-sweep.jpg', 'pet-sweep');
new Product('scissors', './assets/scissors.jpg', 'scissors');
new Product('shark', './assets/shark.jpg', 'shark');
new Product('sweep', './assets/sweep.png', 'sweep');
new Product('tauntaun', './assets/tauntaun.jpg', 'tauntaun');
new Product('unicorn', './assets/unicorn.jpg', 'unicorn');
new Product('usb', './assets/usb.gif', 'usb');
new Product('water-can', './assets/water-can.jpg', 'water-can');
new Product('wine-glass', './assets/wine-glass.jpg', 'wine-glass');


firstImg.addEventListener('click', handleClick);
secondImg.addEventListener('click', handleClick);
thirdImg.addEventListener('click', handleClick);


randomImage();