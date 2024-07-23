// Write a function that takes a string as input and returns the number of words in the string. Assume that words are separated by spaces.

 function NumberOfWords(str){
    let cleanstr=str.match(/[a-zA-Z0-9]/g)
    return cleanstr.length
 }
 console.log(NumberOfWords('Muawia ASIF'))

// Write a function that takes a string as input and capitalizes the first letter of each word. Assume that words are separated by spaces.
  function  toUpper(str){
    let words=str.split(' ')
    let seprate=words.map((el)=>el.charAt(0).toUpperCase()+ el.slice(1).toLowerCase())
    return seprate.join(' ')
  }
  console.log(toUpper('hamza kahn'))
// Write a function that takes a string as input and returns the most frequent character in the string.
function mostFreequent(chr){
  let seprate=chr.split('')
  let count={}
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
  return maxCount
}
console.log(mostFreequent('muawia'))
// What is the purpose of try and catch in Javascript?

// Write a function that takes a string as input and checks if it contains only numeric characters. Return true if it does, false otherwise.
function CheckNumaric(str){
 return str==='0-9'?true:false
}
console.log(CheckNumaric('muuuue'))
console.log(CheckNumaric('1023'))
// Write a function that takes a string as input and removes all whitespace characters (spaces, tabs, newlines) from the string.
  function removespace(str){
let cleand=str.replace(/[ , ,\n]/g,'')
return cleand
  }
  console.log(removespace('muaw    wia  asif \n hamza'))
// Write a function that takes a string as input and returns the string with each word reversed (but the order of the words remains the same). Assume that words are separated by spaces.
function reverseStr(str) {
  let words = str.split(' ');
  let reversedWords = words.map(el => el.split('').reverse().join(''));
  return reversedWords.join(' ');
}

console.log(reverseStr('muawia asif'));  // Output: "aiwaum fisa"

// Write a function that takes a string as input and returns the string with all the vowels replaced by dashes ("-").
function replaced(str){
  return str.replace(/[a,e,i,o,u]/g,'-')
}
console.log(replaced('muawia'))

// Write a function that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
function sortArry(arr){
  return arr.sort()
}
console.log(sortArry(['JavaScript','HTML','CSS','C++','MySQl']))
// Write a function that takes a string as input and returns an object with the frequency count of each character in the string.
function frequencyOfChr(str){
  let seprate=str.split('')
  let obj={}
  for(let i of seprate) {
    if(obj[i]){
      obj[i]+=1
    }
    else{
      obj[i]=1
    }
  }
  return obj
}
console.log(frequencyOfChr('muawia'))

//    13. Write a Javascript program to find the missing number in a given array of numbers between 10 and 20.
// Series: 10 11 12 13 14 16 17 18 19 20
function findMissingNumber(arr) {
  const range = [];
  for (let i = 10; i <= 20; i++) {
      range.push(i);
  }

  const missingNumber = range.find(num => !arr.includes(num));
  
  return missingNumber;
}

const arr = [10, 11, 12, 13, 14, 16, 17, 18, 19, 20];
console.log(findMissingNumber(arr));  // Output: 15

//    14. Write a function to remove a key from a object.
function removeKey(obj, keyToRemove) {
  for (const key in obj) {
     delete obj[keyToRemove];

  }
  return obj;
}
let obj={name:'muawia',age:12,city:'tmp'}
console.log(removeKey(obj,'age'))
console.log(removeKey(obj,'name'))
//    15. Write a function to remove spaces from following object keys. 
function removKeySpace(obj){
  let newObj = {};

  for (const key in obj) {
  
      let free=key.replace(/[\s]/g,'')
      newObj[free] = obj[key];
    
  }
  return newObj
}
let space={'S  001': ['Math', 'Science'], 'S      002': ['Math', 'English'],'full          Name':'muawia'}
console.log(removKeySpace(space))



//     17. Write a program to get the total length of all values in a given dictionary with string values.
function getLength(object){
  let sum=0
for (const key in object) {
  sum+=object[key].length
}
return sum
}

object = {'#FF0000':'Red', '#800000':'Maroon', '#FFFF00':'Yellow', '#808000':'Olive'}
console.log(getLength(object))