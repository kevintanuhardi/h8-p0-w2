
// //Added Problem 1
console.log("===========");
var myNum = "";

for(var j= 0 ; j < row; j++){

  myNum = myNum + j;
  for(var k = 0 ; k < row ; k++){
    console.log(myNum);
  }
}

//Added Problem 2
console.log("===========");

 for(var i = 0 ; i < row; i++){
   hash = "";
   space = "";
   for(var j = 0; j<row; j++){
     if((j == 0 || j == row - 1 )||(i == 0 || i == row - 1)){
       hash = hash + "#";
     }else if(i == (row-1)/2 && j == (row-1)/2){
       hash = hash + "*";
     } 
     else{ 
       hash = hash + " ";
       }
     }
   console.log(hash);
 }

