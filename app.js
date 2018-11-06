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
  this.alttext = altText;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}



function randomImage() {

  var firstRandomImage = Math.floor(Math.random() * allProducts.length);
  var secondRandomImage = Math.floor(Math.random() * allProducts.length);
  var thirdRandomImage = Math.floor(Math.random() * allProducts.length);

  while (secondRandomImage === firstRandomImage || secondRandomImage === thirdRandomImage || firstRandomImage === thirdRandomImage || previouslyDisplayed.includes(firstRandomImage) || previouslyDisplayed.includes(secondRandomImage) || previouslyDisplayed.includes(thirdRandomImage) ) {

  firstRandomImage = Math.floor(Math.random() * allProducts.length);
  secondRandomImage = Math.floor(Math.random() * allProducts.length);
  thirdRandomImage = Math.floor(Math.random() * allProducts.length);

  }
  
  previouslyDisplayed[0] = firstRandomImage;
  previouslyDisplayed[1] = secondRandomImage;
  previouslyDisplayed[2] = thirdRandomImage;
  console.log('images previously displayed ' + previouslyDisplayed);







  // function setimages(randindx)
  // Setting image source for all 3 images displayed
  firstImg.src = allProducts[firstRandomImage].filepath;
  secondImg.src = allProducts[secondRandomImage].filepath;
  thirdImg.src = allProducts[thirdRandomImage].filepath;

  //setting the amount of views for each image displayed
  allProducts[firstRandomImage].views++;
  console.log('views ' + allProducts[firstRandomImage].views);

  allProducts[secondRandomImage].views++;
  console.log('views ' + allProducts[secondRandomImage].views);

  allProducts[thirdRandomImage].views++;
  console.log('views ' + allProducts[thirdRandomImage].views);

  totalClickTracker++;
  console.log(totalClickTracker);

  if (totalClickTracker === 25) {
    firstImg.removeEventListener('click', randomImage);
    secondImg.removeEventListener('click', randomImage);
    thirdImg.removeEventListener('click', randomImage);
// here at the end of the click tracker is where you want to show results
  //   displayResults();
   }
};

function displayResults() {

  var results = document.getElementById('main-content');
  

  //go through all products in for loop
  for (var i = 0; i < allProducts.length; i++) {

    //create img tag with the src of the filepath at allProducts[i]
    
    }




    displayImage = createElementByid('IMG')
    document.main.appenChild(displayImage)



    // append to main (you got it and set a variable for main above for loop)




    // create a p tag for the views
    // append to main (you got it and set a variable for main above for loop)

    // create a p tag for the votes
    // append to main (you got it and set a variable for main above for loop)    
  }


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


firstImg.addEventListener('click', randomImage);
secondImg.addEventListener('click', randomImage);
thirdImg.addEventListener('click', randomImage);


randomImage();

console.log(allProducts);

