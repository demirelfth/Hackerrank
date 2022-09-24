process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        let a = 1n, b = 0n; // Starting numbers
        let sum  =  0n; // because the even fibo number is by default b
        while (b < n) { // because b is the last number showed
            let temp = a; // keep a but not influence his original value
            a = b;
            b = temp + b;
            if (b > n) {
                break;
            }
            if (b % 2n === 0n) { // b should be an even number to be added to sum
                sum += b;
            }
        }
        console.log(sum.toString())
    }
}