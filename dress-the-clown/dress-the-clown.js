// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// gobal variables
let headIndex = 0
let clothesIndex = 0
let shoesIndex = 0
let bodySectionIndex = 0

// get body parts
let head = document.getElementById('head')
let clothes = document.getElementById('clothes')
let shoes = document.getElementById('shoes')

// functions for increasing and decreasing the provided index by 1
// these functions are required so that we don't have to check the
// value of the index every time we alter the index
function decreaseIndex(index) {
  index--
  if (index < 0) {
    index = 5
  }
  return index
}

function increaseIndex(index) {
  index++
  if (index > 5) {
    index = 0
  }
  return index
}

// increment the CURRENT clothing option index, based on bodySectionIndex
function increaseCurrentClothingIndex() {
  if (bodySectionIndex == 0) {
    headIndex = increaseIndex(headIndex)
  }
  if (bodySectionIndex == 1) {
    clothesIndex = increaseIndex(clothesIndex)
  }
  if (bodySectionIndex == 2) {
    shoesIndex = increaseIndex(shoesIndex)
  }
}

// decrement the CURRENT clothing option index, based on bodySectionIndex
function decreaseCurrentClothingIndex() {
  if (bodySectionIndex == 0) {
    headIndex = decreaseIndex(headIndex)
  }
  if (bodySectionIndex == 1) {
    clothesIndex = decreaseIndex(clothesIndex)
  }
  if (bodySectionIndex == 2) {
    shoesIndex = decreaseIndex(shoesIndex)
  }
}

// update source for each img based on current clothing index
function renderCurrentClothing() {
  head.src = `images/head${headIndex}.png`
  clothes.src = `images/body${clothesIndex}.png`
  shoes.src = `images/shoes${shoesIndex}.png`
}

// put it all together in an event function that handles keydown event
document.addEventListener('keydown', (e) => {
  e.preventDefault()
  switch (e.key) {
    case 'ArrowDown':
      bodySectionIndex++
      if (bodySectionIndex > 2) {
        bodySectionIndex = 0
      }
      break
    case 'ArrowUp':
      bodySectionIndex--
      if (bodySectionIndex < 0) {
        bodySectionIndex = 2
      }
      break
    case 'ArrowRight':
      increaseCurrentClothingIndex()
      renderCurrentClothing()
      break
    case 'ArrowLeft':
      decreaseCurrentClothingIndex()
      renderCurrentClothing()
      break
  }
})
