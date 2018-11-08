'use strict';

var firstImg = document.getElementById('first');
var secondImg = document.getElementById('second');
var thirdImg = document.getElementById('third');

var previouslyDisplayed = [];
var allProducts = [];
var chartLabels = [];
var chartVotes = [];
var chartColors = [];
var chartBorderColors = [];
var totalClickTracker = 0;
var ctx = document.getElementById("myChart").getContext('2d');

var cyan = 'rgba(0,255,255,1)';
var magenta = 'rgba(255,0,255,1)';
var lime = 'rgba(0,255,0,1)';
var chartNeonColors = [
  cyan, magenta, lime,
  cyan, magenta, lime,
  cyan, magenta, lime,
  cyan, magenta, lime,
  cyan, magenta, lime,
  cyan, magenta, lime,
  cyan, magenta
];

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

function Product(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.views = 0;
  this.votes = 0;

  var colorR = Math.floor(Math.random() * 255);
  var colorG = Math.floor(Math.random() * 255);
  var colorB = Math.floor(Math.random() * 255);

  this.bgColor = `rgba(${colorR}, ${colorG}, ${colorB}, 0.6)`;
  this.borderColor = `rgba(${colorR}, ${colorG}, ${colorB}, 1)`;
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
};

function handleClick(event) {
  console.log(event.target.alt);
  totalClickTracker++;
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].altText) {
      allProducts[i].votes++;
    }
  }

  if (totalClickTracker < 25) {
    randomImage();
  } else {
    firstImg.removeEventListener('click', handleClick);
    secondImg.removeEventListener('click', handleClick);
    thirdImg.removeEventListener('click', handleClick);
    displayResults();
  }


};

function displayResults() {

  for (var i = 0; i < allProducts.length; i++) {
    chartLabels.push(allProducts[i].name);
    chartColors.push(allProducts[i].bgColor);
    chartVotes.push(allProducts[i].votes);
    chartBorderColors.push(allProducts[i].borderColor);
  }

  var chartConfig = {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: '# of Votes',
        data: chartVotes,
        backgroundColor: chartNeonColors,
        fontColor: '#FFFFFF'
      }]
    },
    options: {
      legend: {
        labels: {
          fontColor: 'white'
        }
      },
      title: {
        display: true,
        fontColor: 'white',
        text: 'Voting Results',
        fontSize: 40
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            fontColor: 'white'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: 'white'
            
          },
        }]
      }
    }
  };

  return new Chart(ctx, chartConfig);
};