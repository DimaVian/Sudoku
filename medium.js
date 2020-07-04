var answer =  
[
  [4,5,3,2,1,7,8,9,6],
  [1,6,2,5,8,9,4,7,3],
  [7,9,8,6,3,4,2,5,1],
  [2,3,1,4,5,8,9,6,7],
  [9,8,5,3,7,6,1,4,2],
  [6,7,4,1,9,2,3,8,5],
  [3,4,9,7,6,1,5,2,8],
  [5,2,6,8,4,3,7,1,9],
  [8,1,7,9,2,5,6,3,4]];

var display =  
[
  [4,5,3,2,1,7,8,9,6],
  [1,6,2,5,8,9,4,7,3],
  [7,9,8,6,3,4,2,5,1],
  [2,3,1,4,5,8,9,6,7],
  [9,8,5,3,7,6,1,4,2],
  [6,7,4,1,9,2,3,8,5],
  [3,4,9,7,6,1,5,2,8],
  [5,2,6,8,4,3,7,1,9],
  [8,1,7,9,2,5,6,3,4]];
  
var matrixsize = 9;
var hideNum = 40;
var row, col ;
var exit;  
var cellnum = 81;
var cellidtext = 'cell-';
var htmlcell = '';
var cellindex = 0;


window.onload = function random(){
  // clear cells defined in no_hide variable 
  // random cells until value not empty , clear the value
    for (var i = 0; i <= hideNum; i++) {
      exit = null ;
      do{
      row = Math.floor(Math.random() * (9-0) +0); 
      col = Math.floor(Math.random() * (9-0) +0);
      //debugger;
      if (display[row][col] != null) {
        display[row][col] = null;
      exit = "X";
      } 
      } while (exit != "X");
    }
    for (var row = 0; row < matrixsize; row++) {
        for (var col = 0; col < matrixsize; col++) {  
          // concatenate to "cell-" cellindex 
          htmlcell = cellidtext.concat(cellindex);
// dynimacly copy from display to html elements
          document.getElementById(htmlcell).value = display[row][col];
          if ( document.getElementById(htmlcell).value != ''){
            document.getElementById(htmlcell).disabled = true;
          }
          cellindex++;   
         }
        }
    }
    function check(){

cellindex = 0;
var result ;
//debugger;
for (var row = 0; row < matrixsize; row++) {
     if (result == 'false')
     {break;} 
  for (var col = 0; col < matrixsize; col++) {
   
    htmlcell = cellidtext.concat(cellindex);
    //debugger;
   if ( document.getElementById(htmlcell).value != answer[row][col] )
  {
   // debugger;
    result = 'false';
    alert ('Solution is wrong :( Please try again');
    break;
  }
    cellindex++; 
    if (cellindex == 81){
    //debugger;
    alert('Good job! You solved the game :)');
    window.location.href="level.html";

            }
        }
     }

  }
  
  function newBoard(){
      location.reload();
  }

  function level(){
    window.location.href="level.html"
}