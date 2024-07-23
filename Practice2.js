// Write a program that takes two numbers as input and outputs their sum, difference, product, and quotient.
function sum(a,b){
    return a+b
}function difference(a,b){
    return a-b
}function Product(a,b){
    return a*b
}function quotient(a,b){
    return a/b
}
console.log(sum(5,8))
console.log(difference(12,8))
console.log(Product(5,8))
console.log(sum(54,8))
// Write a program that takes a number as input and prints whether it is even or odd.
function chekNumber(num){
if(num%2===0){
    console.log('this is even')
}
else{
    console.log('this is oddd')
}
}
chekNumber(8)
chekNumber(7)
// Write a program that takes a string as input and prints the reverse of the string.
function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr('Muawia Asif'))
// Write a program that generates and prints the Fibonacci sequence up to a given number of terms.
function FibonacciSeries(num){
    let n1 = 0, n2 = 1, nextTerm;
   let newArr=[]
    console.log('Fibonacci Series:');
    
    for (let i = 0; i <= num; i++) {
        newArr.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
  
    }
    return newArr
}
console.log(FibonacciSeries(5))

// Write a program that takes an array of numbers as input and outputs the largest and smallest numbers in the array.
function smallestAndLargest(arr) {
    if (arr.length === 0) {
       return null; 
    }
 
    let smallest = arr[0];
    let largest = arr[0];
 
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest=arr[i]
        }
        else if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return {largest,smallest}
 }
 
 const nums = [4, 2, 9, 1, 7, 5];
 console.log(smallestAndLargest(nums))

// Write a program that prompts the user for a number and then prints all the prime numbers up to that number.
// let PrimeNumber=prompt('Enter a Number')
 
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// const PrimeNumber = prompt('Enter a number');

// const number = parseInt(PrimeNumber);
// if (isNaN(number)) {
//     console.log('Invalid input, please enter a number.');
// } else {
//     console.log(`Prime numbers up to ${number}:`);
//     for (let i = 2; i <= number; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// console.log(isPrime(7));

// Write a program that takes a sentence as input and counts the number of words in the sentence.
function CountWords(str){
    let word=str.match(/[a-zA-Z]/g)
    // ager ham match wala string ka method ni use kry gy tub ys  sb space or letter sub ko count kry ga
    return word.length
}
console.log(CountWords('Hello'))
// Write a program that takes an array of numbers as input and returns a new array with only the positive numbers from the original array.
function PositiveArray(arr){
    return arr.filter((el)=>el>0).map((el)=>el)
}
let arr=[12,33,4,-5,-1,-12,3,-5]
console.log(PositiveArray(arr))
// Write a function that takes two numbers as parameters and returns their sum.
   function sum(a,b){
return a+b
   }
   console.log(sum(8,9))
// Using a for in loop, calculate the total number of properties in an object.
      let person={
        name:'muawia',city:'tmp',age:'87'
      }
      let count=0
     for (const key in person) {
    //   console.log( `${person[key]}`)
        count++
     }
     console.log('Person Object properties is' ,count)
      // Using a for in loop, print all the properties of an object that have a string value.
      for (const key in person) {
        console.log( `${key}:${person[key]}`)
       }
// Using a combination of for loop and for of loop, iterate over an array of objects and print a specific property of each object.


// Write a function that takes an array of numbers as a parameter and returns the largest number in the array.
function LargestArray(arr){
    if (arr.length === 0) {
        return null; 
     }
  
     let largest = arr[0];
  
     for(let i=0;i<arr.length;i++){
         if(arr[i]>largest){
            largest=arr[i]
        }
        
     }
     return {largest}
}
let arr2=[2,5,12,3,7]
console.log(LargestArray(arr2))

// Write a function that takes a string as a parameter and returns the reversed version of the string.
function String1(str){
    return str.split('').reverse().join('')
}
console.log(String1('function that takes a string'))

// Write a function that takes an array of strings as a parameter and returns a new array with the lengths of those strings.
function StringLength(arr){
    return arr.map((el)=>  el.length)

}
console.log(StringLength(['JavAsCRIPT','Java','c++','HTML','CSS']))
