var ld = require("./skodld.js");

console.log("four:fuor",ld("four","fuor"));

/* DEBUG */
var showmatrix = 6;
console.log("\nfuor:four,debug custom");
ld("fuor","four",function(matrix){
  showmatrix--;
  if(showmatrix == 0){
    console.log(matrix);
  }
});

console.log("\nfuor:four,default debug");
ld("fuor","four",1);

