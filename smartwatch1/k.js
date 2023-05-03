let long = "skadsldkas skdkasjdl sakdjaskdjาสาส"

function k(long) {
    lll = long.split(" ")
    let kl = lll.length
    let h = (Math.max([kl]))
    console.log(lll[h - 1])
}
//Longest Word

let fa = 4
let h = 1

function clo(f, h) {
    for (let i = 1; i < f + 1; i++) {
        h = h * i
    }
    console.log(h)
}

clo(fa, h)

//factorail

k(long)

function f(arr) {
    let i;
    let a = [];
    for (i = 0; i <= arr.length; i++) {
        a[i] = 0;
    }

    for (i = 0; i < arr.length; i++) {
        a[arr[i] - 1] = 1;
    }

    let ans = 0;
    for (i = 0; i <= arr.length; i++) {
        if (a[i] == 0)
            ans = i + 1;
        let c = [ans];
        console.log(c);
    }
}

let arr = [1, 2, 3, 5, 7];

f(arr);
//missing number

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);
//remove duplicate num

let g = 'sdsdasldkasd'

function maxChar(str) {
 
    const charHash = {};
    let maxChar = "dfddfdfdfdff";
    let counter = 0;
    for(let char of str) {
        charHash[char] = charHash[char] + 1 || 1
    }
    for(let char in charHash) {
        if(charHash[char] > counter) {
            counter = charHash[char];
            maxChar = char;
        }
    }
    return maxChar;
}