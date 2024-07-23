// Function to Find Highest Non-Consecutive Sum:
// Input:

// Array of numbers: [3, 8, 2, 5, 1]
// Expected Output:

// Highest sum achievable by summing any combination of non-consecutive numbers: 13 (achieved by adding 3, 8, and 2).
// Function to Check Balanced Parentheses:
// Input:

// String containing parentheses: "((()()))"
// Expected Output
function isBalancedParentheses(str) {
    let arr = [];

    for (let char of str) {
        if (char === '(') {
            arr.push(char);
        } else if (char === ')') {
            if (arr.length === 0) {
                return false;
            }
            arr.pop();
        }
    }

    return arr.length === 0;
}

let inputString = "((()())(()";
console.log(isBalancedParentheses(inputString)); 


//
// Function to Find First Non-Repeated Character:
// Input:

// String: "statistics"
// Expected Output:
function  Nonrepeated(str){
let count={}
let seprate=str.split('')
for (const i of seprate) {
    if(count[i]){
        count[i]+=1
    }
    else{
        count[i]=1
    }
}
for (const key in count) {
    if(count[key]===1){
       return key
      }
}
}
console.log(Nonrepeated("statistics"))
// First non-repeated character: "a"
// Function to Generate Random Password:
// Input:
function genRatePassword(input){
    let pass=''
    let str='012345678910ABCDEFGHIJKLMANOPAQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+<>?"';
    for (let i=0;i<input;i++) {
        let code=(Math.random() * str.length + 1)
        pass+=str.charAt(code)

    }
    return pass
}
console.log(genRatePassword(12))
// Desired password length: 12
// Expected Output:

// Random password of length 12 with a mix of characters: "R#5Fg2qL$9p!"
// Function to Count WordOccurrences:
// Input:
// Text: "The quick brown fox jumps over the lazy dog. The dog barks."
// Expected Output:

// Number of occurrences of the word "the": 3
function  WordOccurrences(str){
    let count={}
    
    let seprate=str.toLowerCase().split(' ')
    for (const i of seprate) {
        if(count[i]){
            count[i]+=1
        }
        else{
            count[i]=1
        }
    }
    let maxCount=0
    let maxKey=''
    for (const key in count) {
        if(count[key]>maxCount){
            maxCount=count[key]
           maxKey=key
          }
    }
    return {maxKey,maxCount}
    }
    // Function to Filter Odd Occurrences:
    function OddOccurrences(arr) {
        let count = {};
        
        // Count the occurrences of each element
        for (const i of arr) {
            if (count[i]) {
                count[i] += 1;
            } else {
                count[i] = 1;
            }
        }
    
        let result = [];
        
        for (let num in count) {
            if (count[num] % 2 !== 0) {
                result.push((num));
            }
        }
    
        return result;
    }
    
    let numbers = [4, 5, 6, 5, 4, 7, 8, 7, 9, 9, 4];
    console.log(OddOccurrences(numbers)); 
    
    
   



// New array containing elements that appear an odd number of times: [5, 6, 8]
// Function to Generate Unique Identifier:
// Input:

// Desired identifier length: 10
// Expected Output:
function identifier(input){
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for(let i=0;i<=input;i++){
        let code=Math.random()*str.length+1
        pass+=str.charAt(code)
    }
    return pass
}
console.log(identifier(10))

// Unique identifier of length 10: "5aB9xT2YwP"
// Function to Find Second Largest Number:
function largestNumber(array){
    let largest=[0]
    for(let i=0;i<array.length;i++){
        if(array[i]>largest){
            largest=array[i]
        }
    }
    return largest
}
// Input:
console.log(largestNumber([20, 10,30, 15, 5, 25]))
// Array of integers: [20, 10, 15, 5, 25]
// Expected Output:

// Second largest number in the array: 20
// Function to Convert Decimal to Binary:
// Input:

// Decimal number: 42
// Expected Output:
function decimalToBinary(number) {
    let binary = '';

    while (number > 0) {
        binary = (number % 2) + binary;
        number = Math.floor(number / 2);
    }

    return binary;
}

let number = 42;
let binary = decimalToBinary(number);
console.log(binary);
