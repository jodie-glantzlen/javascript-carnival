  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

//Get all the images
let images = document.getElementsByTagName('img');

//main feature

//create unicorns object
//each key matches the img's id, so we can use it to manipulate it dynamically in template literals
//each key's value is a state from 0 to 3, which corresponds to the img we want to give it
//when an img is clicked:
//update the relevant state so if you click unicorn1, unicorns.unicorn-1 += 1 (which corresponds to unicorn-1.png)
//AND update img's src using template literals?

const unicorns = {
  "unicorn-1": 0,
  "unicorn-2": 0,
  "unicorn-3": 0
}

//handle click on images

function imageClicked(e) {
  let image = e.target;
  unicorns[image.id] += 1;
  //console.log(`${unicorns[image.id]}`)
  if (unicorns[image.id] > 3) {
    alert(`${image.id} says 'Thank you!'`)
  } else {
    document.getElementById(`${image.id}`).src = `images/unicorn-${unicorns[image.id]}.png`;
  }
}

for (let image of images) {
  image.onclick = imageClicked;
}


