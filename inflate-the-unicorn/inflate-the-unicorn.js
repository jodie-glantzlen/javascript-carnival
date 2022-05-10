  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

//Get all the images
let images = document.getElementsByTagName('img');

//main feature

//create unicorns object
//each key matches the img's id, so we can use it to manipulate it dynamically in template literals
//each count is a state from 0 to 3, which corresponds to:
  //the number of times it's been clicked
  //AND the img we want to give it, again using template literals
//when an img is clicked:
  //update the relevant state so if you click unicorn1, unicorns.unicorn-1.count += 1 
  //(which corresponds to unicorn-1.png AND img's id)
  //AND update img's src using template literals?

const unicorns = {
  "unicorn-1": {
    count: 0,
    name: "John"
  },

  "unicorn-2": {
    count: 0,
    name: "Paul",
  },

  "unicorn-3": {
    count: 0,
    name: "George"
  }
}

//handle click on images

function imageClicked(e) {
  let image = e.target;
  unicorns[image.id].count += 1;
  //console.log(`${unicorns[image.id]}`)
  if (unicorns[image.id].count > 3) {
    alert(`${unicorns[image.id].name} says 'Thank you!'`)
  } else {
    document.getElementById(`${image.id}`).src = `images/unicorn-${unicorns[image.id].count}.png`;
  }
}

for (let image of images) {
  image.onclick = imageClicked;
}

//It works! I don't know if using the same name for three different things (img id, the actual img's name and the unicorn reference) is good practice
//but I wanted to try a dynamic, DRY and short solution
//because my initial thought was 'oh we can use if statements" but... I've already practiced that enough I think

