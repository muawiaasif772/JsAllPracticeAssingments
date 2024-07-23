// Given an array of numbers, create a new array that only contains the even numbers.
function EvenArray(arr) {
  return arr.filter((el) => el % 2 === 0).map((el) => el);
}
console.log(EvenArray([2, 3, 4, 5, 7, 8]));

// Given an array of strings, create a new array that only contains strings with more than 5 characters.
function StrOfArray(arr) {
  return arr.filter((el) => el.length > 5).map((el) => el);
}
console.log(
  StrOfArray(["Hello", "JavAsCRIPT", "c++", "Typescript", "Java", "MYsQl"])
);
// Given an array of objects representing students with properties such as name and grade, create a new array that only contains students with a grade higher than or equal to 90.
let Studentsdata = [
  { name: "Muawia", age: "21", grade: 81 },
  { name: "Muawia", age: "21", grade: 90 },
  { name: "Muawia", age: "21", grade: 97 },
];
let data=Studentsdata.filter((el)=>el.grade>90).map((el)=>el)
console.log(data)

// Given an array of strings, create a new array that only contains strings that start with the letter "A".
function StrOfArray(arr) {
    return arr.filter((el) => el.charAt(0)=='A').map((el) => el);
  }
  console.log(
    StrOfArray(["Hello", "JavAsCRIPT", "c++", "ATypescript", "Java", "AMYsQl"])
  );
// Given an array of objects representing products with properties such as name and price, create a new array that only contains products with a price lower than a specific value.



// Given an array of strings, create a new array that only contains strings in all uppercase.
function StrOfArrayToUpper(arr) {
    return arr.map((el) => el.toUpperCase());
  }
  console.log(
    StrOfArrayToUpper(["Hello", "JavAsCRIPT", "c++", "ATypescript", "Java", "AMYsQl"])
  );
// Given an array of numbers, create a new array that only contains numbers that are multiples of 3.

// Write a function that takes a string as input and returns the length of the string.
  function lengthOfstr(str){
    let Cleanstr=str.match(/[a-zA-z0-9]/g)
    return Cleanstr.length;
  }
  console.log(lengthOfstr('hello muwia asif'))

// Write a function that takes a string as input and returns the string in reverse order.
function revreceStr(str){
    // str.reverse()
    let rever=str.split('').reverse().join('')
    return rever
}
console.log(revreceStr('hello'))
// Write a function that takes a string as input and returns the string with all the vowels removed.
function RemovedVowls(str){
    let rem=str.r
}
let he='hello'
