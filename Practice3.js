// Write a function that takes an array of numbers as a parameter and returns the average of those numbers.
// Write a function that takes a string as a parameter and returns the number of vowels in the string.
function vowels(str) {
    // Define the vowels
    const vowels = 'aeiouAEIOU';
    
    let count = 0;
        for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

console.log(vowels('my name is muahmmad Muawia'));  



// Write a function that takes a number as a parameter and returns true if the number is prime, and false otherwise.

function longestWord(str) {
    // Split the string into an array of words
    let words = str.split(' ');
    
    // Initialize a variable to keep track of the longest word
    let longest = '';
    
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
}

console.log(longestWord('my is muhammad muawia and my fatehr name is muhammad asif'));  

// Using a for loop, calculate the sum of all the numbers from 1 to 100.
function CalculateSum(num){
    let sum=0
    for (let i=0;i<=num;i++) {
       sum+=i 
    }
    return sum
}
console.log(CalculateSum(100))
// Write a function that takes two arrays as parameters and returns a new array containing only the elements that are present in both arrays.
function InterSection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 21, 13, 4, 15, 6];
console.log(InterSection(arr1, arr2));  

// Write a function that takes a string as input and returns the number of occurrences of a specific character in the string.

// Write a function that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.

// Write a function that takes a number as input and returns true if it is a perfect square, and false otherwise.
function isSquare(num){
    let sqrt=Math.sqrt(num)
    
    return sqrt===Math.floor(sqrt)
}
console.log(isSquare(8))
console.log(isSquare(7))
