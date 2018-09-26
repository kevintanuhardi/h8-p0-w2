//1. Melakukan Looping Menggunakan While

var i=0;

console.log("LOOPING PERTAMA");
while(i<=20){
  console.log(i + " - I love coding!");
  i = i + 2;
}
console.log("LOOPING KEDUA");
while(i>0){
  i= i - 2;
  console.log(i + " - I love coding!");
}

console.log("=======================")
//2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for(var j=1; j <= 20 ; j++){
  console.log(j + " - I love coding!");
}

console.log("LOOPING KEDUA");
for(var j=20; j> 0 ; j--){
  console.log(j + " - I will become fullstack developer");
}

console.log("=======================")
//3. Angka Ganjil dan Genap

for(var i = 1 ; i <= 100 ; i++){
  if(i%2 !== 0){
    console.log("GANJIL");
  }
  else {
    console.log("GENAP");
  }
}
console.log("=======================")
for(var i=1 ; i <= 100 ; i = i + 2){
  if(i%3 == 0){
    console.log(i + "kelipatan 3");
  }
  else{
    console.log("")
  }
}
console.log("=======================")
for(var i=1 ; i <= 100 ; i = i + 5){
  if(i%6 == 0){
    console.log(i + "kelipatan 6");
  }
  else{
    console.log(" ")
  }
}
console.log("=======================")
for(var i=1 ; i <= 100 ; i = i + 9){
  if(i%10 == 0){
    console.log(i + "kelipatan 10");
  }
  else{
    console.log(" ")
  }
}