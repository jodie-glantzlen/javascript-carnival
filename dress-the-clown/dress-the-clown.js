  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

// gobal variables to reuse
let headIndex = 0;
let bodyIndex = 0;
let shoesIndex = 0;

// get body parts
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

// change head of the clown with image 1


function changeClownHead() {
  head.src = `images/head${headIndex}.png`
  headIndex += 1
  //console.log('head index: ', headIndex)
}


changeClownHead()