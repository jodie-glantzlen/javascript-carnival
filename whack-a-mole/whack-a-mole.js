  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")
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

//1. store reference to the cells

//array to store references in:
let cellsArr = document.getElementsByTagName('td');
//console.log(cellsArr);

//2.get a randomised cell index:

let randomIndex = getRandomInt(0, cellsArr.length);
//console.log(randomIndex);
//cellsArr[randomIndex].innerHTML = 'hi';

//3. append img child to random td:
const node = document.getElementsByTagName('td')[randomIndex];
let imgChild = document.getElementById('mole');
node.appendChild(imgChild);


//utilities
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
