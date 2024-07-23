// What is an object and its writing style? What are the different ways to access object properties?
// Object is a data type in which key Pair values are present
let Obj={
    name:'Muawia',city:'TMP',age:19
}
// By Dot Notation
console.log(Obj.name)
// By Destructing
let {name:a,age:b,city:c}=Obj
console.log(b)
// By Bracket 
console.log(Obj['city'])
// By Object Keys Buil in method
let key=Object.keys(Obj)
console.log(Obj[key[0]])
// How to check how many letters are in a string?
function stringLength(str){
    let word=str.match(/[a-zA-Z]/g)
    // ager ham match wala string ka method ni use kry gy tub ys  sb space or letter sub ko count kry ga
    return word.length
}
console.log(stringLength('hello world'))
//  What would be the result of 100 == '101' and 100 != '100'?
// false and true

 console.log(100=='101'?true:false) //  false

  console.log(100!=='100'?true:false) // true

//  What is the method to check if any string ends with any specific letter?
let str='Muawia Asif'
console.log(str.endsWith('f'))// true
console.log(str.endsWith('a')) //  false
//  What is an array and explain with an example by writing down an array of the first 10 positive integers? And access the 5th value in an array.
// array is a data type in wich data store in oreder and and evry elemnt in array has specific index by giving a index element will be return 
let array=[1,2,3,4,5,6,7,8,9,10]
console.log(array[4])
// How to add and remove values from an array? Explain with a code example.
// ***********Add*******

array.push(12)
console.log(array) // outPut [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12
array.unshift(13)
console.log(array) // outPut [13,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12
array.splice(1,0,14,15)
console.log(array) // outPut [13,14,15,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12


// 7. What is a boolean and what would be the result of 0 and null in boolean?
// A boolean is a primitive data type in JavaScript that can have one of two values: true or false. 

console.log(Boolean (0))
console.log(Boolean (null))


// 8. Write a program that prints "Hello, world!" to the console.
console.log('Hello, world!')
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;

}
// console.log(Math.sqrt(5))
console.log(isPrime(8));


// Output: true

// 10. Write a function that takes a number as input and checks if it is an even number. Return true if it is, false otherwise.
function isEven(num){
    if(num%2==0){
        return true
    }
    return false
}
console.log('this is even',isEven(6))
console.log('this is odd',isEven(5))
// 11. Write a function that takes a number as input and returns its factorial.
  function factorial(num){
  let fact=1
  for(let i=num;i>=1;i--){
    fact=fact*i
  }
  return fact
  }
  console.log(factorial(6))
// 12. Write a function that takes a number as input and checks if it is a perfect square. Return true if it is, false otherwise.

function checkSquare(num) {
   for(let i=1;i<=num;i++){
    let d=i*i
    if(d===num){
        return true
    }
   }
   return false
}

// Examples:
console.log(checkSquare(5)); // true

console.log(checkSquare(16))
// 13. Write a function that takes two numbers as input and returns the larger of the two.
function checkLarger(num1,num2){
    if(num1>num2){
        return num1
    }
return num2
}
console.log(checkLarger(12,3))
// 14. Write a program that prompts the user for their name and then prints "Hello, [name]!" to the console.
// let myname = prompt("Please enter your name:");

        // console.log("Hello, " + myname );
