'use strict';

var firstImg = document.getElementById('first');
var secondImg = document.getElementById('second');
var thirdImg = document.getElementById('third');


firstImg.src = './assets/bag.jpg';
secondImg.src = './assets/banana.jpg';
thirdImg.src = './assets/bathroom.jpg';

var allProducts = [];

function Product(name,filepath,altText) {
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


  firstImg.src = allProducts[firstRandomImage].filepath;
  secondImg.src = allProducts[secondRandomImage].filepath;
  thirdImg.src = allProducts[thirdRandomImage].filepath;

};






new Product('bag','./assets/bag.jpg','bag');
new Product('banana','./assets/banana.jpg','banana');
new Product('bathroom','./assets/bathroom.jpg','bathroom');
new Product('boots','./assets/boots.jpg','boots');
new Product('breakfast','./assets/breakfast.jpg','breakfast');
new Product('bubblegum','./assets/bubblegum.jpg','bubblegum');
new Product('chair','./assets/chair.jpg','chair');
new Product('cthulhu','./assets/cthulhu.jpg','cthulhu');
new Product('dog-duck','./assets/dog-duck.jpg','dog-duck');
new Product('dragon','./assets/dragon.jpg','dragon');
new Product('pen','./assets/pen.jpg','pen');
new Product('pet-sweep','./assets/pet-sweep.jpg','pet-sweep');
new Product('scissors','./assets/scissors.jpg','scissors');
new Product('shark','./assets/shark.jpg','shark');
new Product('sweep','./assets/sweep.png','sweep');
new Product('tauntaun','./assets/tauntaun.jpg','tauntaun');
new Product('unicorn','./assets/unicorn.jpg','unicorn');
new Product('usb','./assets/usb.gif','usb');
new Product('water-can','./assets/water-can.jpg','water-can');
new Product('wine-glass','./assets/wine-glass.jpg','wine-glass');
randomImage();

console.log(allProducts);