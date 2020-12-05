const num = 10;

let primeArr = [2, 3];
let lastCheckedNumber = 3;
let currentPrimeTest;
let isCurrentPrimeNumber;

while(primeArr.length < num) {
    currentPrimeTest = lastCheckedNumber+1;
    isCurrentPrimeNumber = true;
    for(i=2;i<currentPrimeTest;i++) {
        if(currentPrimeTest%i === 0) {
            lastCheckedNumber = currentPrimeTest;
            isCurrentPrimeNumber = false;
            break;
        }
    }
    if(isCurrentPrimeNumber) {
        primeArr.push(currentPrimeTest);
    }
    lastCheckedNumber = currentPrimeTest;
};

console.log("primeArr: ", primeArr);