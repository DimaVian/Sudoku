var answer =  
[
  [9,1,5,7,2,3,4,6,8],
  [7,6,3,8,9,4,5,2,1],
  [2,4,8,5,1,6,7,9,3],
  [4,8,2,6,7,5,3,1,9],
  [1,5,9,3,8,2,6,7,4],
  [6,3,7,9,4,1,2,8,5],
  [5,9,1,2,3,7,8,4,6],
  [8,2,6,4,5,9,1,3,7],
  [3,7,4,1,6,8,9,5,2]];

var display =  
[
  [9,1,5,7,2,3,4,6,8],
  [7,6,3,8,9,4,5,2,1],
  [2,4,8,5,1,6,7,9,3],
  [4,8,2,6,7,5,3,1,9],
  [1,5,9,3,8,2,6,7,4],
  [6,3,7,9,4,1,2,8,5],
  [5,9,1,2,3,7,8,4,6],
  [8,2,6,4,5,9,1,3,7],
  [3,7,4,1,6,8,9,5,2]];
  
var matrixsize = 9;
var hideNum = 60;
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