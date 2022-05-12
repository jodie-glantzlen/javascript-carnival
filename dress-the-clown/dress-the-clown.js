// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// gobal variables to reuse
let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

// get body parts
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

// change clown head
function changeClownHead() {
  head.src = `images/head${headIndex}.png`
}

//change heads on arrow right and left key
document.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowRight') {
    headIndex++
    if (headIndex > 5) {
      headIndex = 0
    }
    changeClownHead()
  } else if (e.key == 'ArrowLeft') {
    headIndex--
    if (headIndex < 0) {
      headIndex = 5
    }
    changeClownHead()
  }
})
