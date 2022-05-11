// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
//tests

// let table = document.getElementById('tbl');
// table.rows[1].cells[1].innerHTML = 'hi';
// let length = table.rows[0].cells.length;
// console.log(length);

//........................................................................//

// FIRST ATTEMPT

//I thought creating an array with all the cells coordinates would make it easier to manipulate the cells
//but it was way too complicated
//so I gave up on that, but I want to keep it here because I worked hard on it.

// let cellsRef = [];

// //get table:
// let table = document.getElementById('tbl');
// //get rows:
// let rows = table.rows;
// console.log('rows: ', rows);
// //loop through row, so we can get reference of all rows:
// for (let i = 0; i < rows.length; i++) {
//   //get cells:
//   let cells = table.rows.item(i).cells;
//   console.log('cells: ', cells);
//   //loop through cells, so we can get reference of all cells, within each row:
//   for (let j = 0; j < cells.length; j++) {
//     //store it all:
//     cellsRef.push([i,j])
//   }
// }
// console.log('cells ref: ', cellsRef);

//............................................................................//

//SECOND ATTEMPT

//global variables we'll use for our main logic
let node
let imgChild

//utilities (thanks JS Cafe)
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//audio
let playSound = () => new Audio('whack-audio.wav').play()

//1. store cells ref in array

let cellsArr = document.getElementsByTagName('td')
//console.log(cellsArr);

//2. create function to append img child to random td
//this function will be called when the page is refreshed
//AND again after we remove mole from a cell

function addMoleToRandomCell() {
  //get a random cell index
  let randomIndex = getRandomInt(0, cellsArr.length - 1)

  //assign it to global variable so we can keep manipulating it later
  node = cellsArr[randomIndex]
  //console.log('current index: ', randomIndex)

  //create new mole img (we need to do it because it gets removed whenever we call whackedMole())
  let newMole = document.createElement('img')
  newMole.src = 'mole.PNG'
  newMole.id = 'mole'

  //make newMole a new child to append to random cell when page is refreshed AND after we click to remove mole
  imgChild = newMole
  node.appendChild(imgChild)
}

//this is called when the page is refreshed:
addMoleToRandomCell()

//3. main feature

function whackedMole(e) {
  let cell = e.target
  //remove mole on click:
  node.removeChild(imgChild)

  //make mole reappear randomly again and 
  addMoleToRandomCell()
  playSound()
}

for (let cell of cellsArr) {
  cell.onclick = whackedMole
}
