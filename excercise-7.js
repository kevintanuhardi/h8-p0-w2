var row = 5;
console.log("the row length will be", row )

console.log("===========");
//1. Menyusun Barisan Bintang

for(var i=0; i<row; i++){
  console.log("*");
}

console.log("===========");
// //2. Menyusun Barisan Bintang Dengan Nested Looping


for(var i=0; i<row; i++){
  var star ="";
  for(var j=0 ; j<5 ; j++){
    star = star + "*";
  }
  console.log(star);
}

console.log("===========");
// //3. Menyusun Barisan Tangga Bintang Dengan Nested Looping


for(var i=1 ; i<=row ; i++){
  var star = "";
  var space  = "";
  for(var j=0 ; j<i ; j++){
    star = star + "*";
  }

  console.log(star);
  
}

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

