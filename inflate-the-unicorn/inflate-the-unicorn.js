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
}

for (let image of images) {
  image.onclick = imageClicked;
}