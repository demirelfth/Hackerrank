'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getMaxLessThanK(n, k){
    var result= 0, temp;
    var a = 1, b = 2;
    
    while(a < n){
        while(b <= n){
            temp = a & b;
            if(temp < k && temp > result){
                result = temp;
            }
            b += 1;
        }
        
        a += 1;
        b = a + 1;
    }
    
    return result;
}


