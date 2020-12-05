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


Create an Angular / React component which will have a progress bar. It will increment after 10 secs. The progress bar will keep on incrementing till the width of the page is met and then it will stop incrementing.
        
Print the first “n” prime numbers. N is anything a user might enter.
  Example n = 5 Output is 2,3,5,7,11
  Example n = 8 Output is 2,3,5,7,11,13,17,19.

Write an algorithm which will tell if a group of characters can be a probable palindrome string with its different combination. Example “rarecac”…. Its possible combinations can be rraacec, racecar etc. Now Racecar is the palindrome, hence return true