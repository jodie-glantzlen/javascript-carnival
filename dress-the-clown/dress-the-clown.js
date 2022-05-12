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

// change clown head 
function changeClownHead() {
  head.src = `images/head${headIndex}.png`
}

//change heads on arrow right key
document.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowRight') {
    changeClownHead();
    headIndex += 1
    if (headIndex > 5) {
      headIndex = 0;
      console.log('headindex: ', headIndex)
  }
}
});

