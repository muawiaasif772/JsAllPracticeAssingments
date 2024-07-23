// Write a function that takes a sentence as input and capitalizes the first letter of each word.
function Capitalizes(str){
  let words=str.split(' ')
  let seprate=words.map((el)=>el.charAt(0).toUpperCase()+ el.slice(1).toLowerCase())
  return seprate.join(' ')
}
console.log(Capitalizes('muawia asif'))
// Write a function that takes two arrays as input and returns a new array with the elements that are unique to each array (not present in both).
       function uniqueArray(arr1,arr2){
        return ([...new Set([...arr1,...arr2])])
       }
       let arr1=[1,2,4,5,6,8,10]
       let arr2=[23,1,6,8,12,11]
       console.log(uniqueArray(arr1,arr2))
// Write a function that takes a number as input and prints a countdown from that number to 1, with a 1-second delay between each countdown.
// function countdown(number){

  
//     setTimeout(()=>{
//       for(let i=number;i>=1;i--){
//       console.log(i)}

//     },1000)
  
// }
// console.log(countdown(8))
// Write a function that takes an array of numbers as input and returns the sum of all the numbers.
function SumOfArray(arr1){
  let sum=0
  for(let i=0;i<arr1.length;i++) {
sum+=arr1[i]
  }
  return sum
}
let arrsums=[1,2,4,5,6,8,10]
console.log(SumOfArray(arrsums))
// Write a function that takes an array of strings as input and returns the concatenated string of all the elements.
function ConcatenatedStr(arr){
return arr.join(' ')
}
let strArr=['JavaScript','is','Modern','Language','in','2024']
console.log(ConcatenatedStr(strArr))
// Write a function that takes an array of numbers as input and returns a new array with only the even numbers from the original array.
function EveNumbers(arr){
  return arr.filter((el)=>el%2==0).map((el)=>el)

}
let arrNums=[1,2,11,22,26,8,10]
console.log(EveNumbers(arrNums))

// Write a function that takes an array of strings as input and returns a new array with the lengths of those strings.
function ArryOfLength(arr){
return arr.map((el)=>el.length)
}
strArr=['JavaScript','is','Modern','Language','in','2024']
console.log(ArryOfLength(strArr))
// Write a function that takes an array of numbers as input and returns the largest number in the array.
function LargetNumberOfArry(arr){
let largest=[0]
for(let i=0;i<arr.length;i++){
  if(arr[i]>largest){
    largest=arr[i]
  }
}
return {largest}
}
arrNums=[1,2,11,22,26,8,10]
console.log(LargetNumberOfArry(arrNums))
// Write a function that takes an array of numbers as input and returns a new array with the numbers in reverse order.
function ReverceArray(arr){
 return arr.reverse()
}
arrNums=[1,2,11,22,26,8,10]

console.log(ReverceArray(arrNums))
// Write a function that takes two arrays as input and returns a new array that contains the elements from both arrays, in alternating order.

// Write a function that takes an array of strings as input and returns a new array with only the elements that start with a specific letter.
function StrOfArray(arr) {
  return arr.filter((el) => el.charAt(0)=='A').map((el) => el);
}
console.log(
  StrOfArray(["Hello", "JavAsCRIPT", "c++", "ATypescript", "Java", "AMYsQl"])
);
// Write a function that takes an array of numbers as input and returns the average of those numbers.
function averageArray(arr){
  let sum=0
  for(let i=0;i<arr1.length;i++) {
sum+=arr1[i]
  }
  return (sum/arr.length)
}
console.log(averageArray(arrNums))
// Write a function that takes an array of numbers as input and returns a new array with the squared values of the original array.
function squared(arr){
  return arr.map((el)=>el*el)
}
arrNums=[1,2,3,4,5,6]
console.log(squared(arrNums))
// Write a function that takes a string as input and checks if it is a palindrome (reads the same forwards and backwards). Return true if it is, false otherwise.
function palindrome(str){
  let cleandstr=str.replace(/[a-zA-Z0-9]/g,'').toLowerCase()
  let reversed=cleandstr.split('').reverse().join('')
  console.log('r',cleandstr)

  return cleandstr===reversed
}
console.log(palindrome("lllevel"))
