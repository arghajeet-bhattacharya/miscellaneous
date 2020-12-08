const paline = ["y", "e", "e"];

let isPalin = true;
const palinLength = paline.length;
let size = paline.length;
let isOdd = size%2;

//console.log("isOdd: ", isOdd);

if(isOdd) {
    size = size -1;
}

//console.log("size: ", size);

size = size/2;

for(i=0;i<size;i++) {
    //console.log("insize loop: ", i, palinLength - i - 1);
    if(paline[i] !== paline[palinLength-i - 1]) {
        isPalin = false;
        break;
    }
}

console.log("isPalin: ", isPalin);
