  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

//MAKE IMAGES ARRAY
let images = document.getElementsByTagName('img');


//FUNCTIONS

//handle click on images

function imageClicked(e) {
  let image = e.target;
  console.log('clicked!')
  //test: when clicking on an image, change the image source:
  image.src = 'images/unicorn-1.png';
}

for (let image of images) {
  image.onclick = imageClicked;
}


