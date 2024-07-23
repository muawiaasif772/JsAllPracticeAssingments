// Function to Find Word with Most Repeated Letters:
// Input:

// Sentence as a string: "The letter 'a' is abundant in bananas."
// Expected Output:Word with the highest number of repeated letters: "bananas"
function MostRepeated(str) {
  let most = [0];
  let word = str.split(" ").map((el) => el.split("").join(""));
  for (let i = 0; i < word.length; i++) {
    if (word[i] < most) {
      most = word[i];
    }
  }
  return most;
}
let str = "The letter 'a' is abundant in bananas.";
console.log(MostRepeated(str));
// Word with the highest number of repeated letters: "bananas"
// Function to Find Longest Contiguous Subarray with Equal Even and Odd Numbers:
// Input:

// Array of integers: [2, 5, 8, 7, 10, 3, 12, 6]
// Expected Output:

// Longest contiguous subarray with an equal number of even and odd numbers: [8, 7, 10, 3]
// Function to Find Oldest Person with Specific Hobby:
// Input:

// Array of person objects:
// [ { name: "Alice", age: 25, hobbies: ["reading", "cooking"] }, { name: "Bob", age: 30, hobbies: ["gardening", "fishing"] }, { name: "Charlie", age: 28, hobbies: ["reading", "painting"] } ]
// Expected Output:

function ArrayOfobj(arr) {
  arr.forEach((el) => {
    el.hobbies.forEach((e) => {
      if (e === "reading") {
        console.log(el.name);
      }
    });
  });
}
let arr = [
  { name: "Alice", age: 25, hobbies: ["reading", "cooking"] },
  { name: "Bob", age: 30, hobbies: ["gardening", "fishing"] },
  { name: "Charlie", age: 28, hobbies: ["reading", "painting"] },
];

ArrayOfobj(arr);

// Name of the oldest person who has the hobby "reading": "Alice"
// Function to Find Most Frequent Word (Excluding Stop Words):
// Input:

// Sentence as a string: "The sun shines, and the birds sing."
// Expected Output:

// Most frequent non-stop word: "sun"
// Function to Calculate Total Value of Store Inventory:
// Input:

// Array of item objects representing the store inventory:
// [ { itemName: "Shirt", price: 20, stockQuantity: 50 }, { itemName: "Jeans", price: 40, stockQuantity: 30 }, { itemName: "Hat", price: 15, stockQuantity: 25 } ]
function CalculateinventoryPrice() {
    let arr = [
        { itemName: "Shirt", price: 20, stockQuantity: 50 },
        { itemName: "Jeans", price: 40, stockQuantity: 30 },
        { itemName: "Hat", price: 15, stockQuantity: 25 },
    ];
    
    let totalValue = 0;

    arr.forEach((el) => {
        totalValue += el.price * el.stockQuantity;
    });

    console.log("Total value of all items in stock: " + totalValue);
}

CalculateinventoryPrice(); 

// Total value of all items in stock: 2250 (calculated as 20 * 50 + 40 * 30 + 15 * 25)
// Function to Evaluate Mathematical Expressions:
// Input:

// Mathematical expression as a string: "3 * (2 + 5) / 4"
// Expected Output:
function MathematicalExpressiion(){
    let expression=eval('3 * (2 + 5) / 4')
   console.log((expression))
}
MathematicalExpressiion()
// Result of the expression: 5.25

// Function to Find Most Cost-Effective Combination of Products:
// Input:

// Array of product objects:
// [ { name: "Shirt", price: 20, quantity: 5 }, { name: "Jeans", price: 40, quantity: 2 }, { name: "Hat", price: 15, quantity: 8 } ]
// Budget: 100
// Expected Output:

// Most cost-effective combination of products: ["Shirt", "Hat"] (costing 20 + 15 = 35)
// Function to Count Word Frequency in Array:
// Input:


function findOccurance(array) {
    let count = {};
    for (const i of array) {
        let item = i.toLowerCase(); 
        if (count[item]) {
            count[item] += 1;
        } else {
            count[item] = 1;
        }
    }
    return count;
}

console.log(findOccurance(["apple", "orange", "Apple", "grape", "Orange", "apple"]));

// Object with word frequency count: { "apple": 3, "orange": 2, "grape": 1 }
// Function to Find Shortest Substring with All Vowels:
// Input:

// String: "aouaeibcdeiou"
// Expected Output:

// Shortest substring containing all vowels: "eiou"
// Function to Find Common Elements between Two Arrays:
// Input:

// Two arrays of integers: [2, 5, 8, 10, 3] and [1, 7, 10, 5, 4]
// Expected Output:

// New array with common elements without duplicates: [5, 10]
// Function to Find Subject with Highest Average Grade:
// Input:

// School object with properties:
function SubjectwithHighestNumber() {
    let obj = {
        students: [
            { name: "Alice", age: 18, grades: { math: 85, science: 90, history: 92 } },
            { name: "Bob", age: 19, grades: { math: 78, science: 80, history: 88 } }
        ],
        subjects: ["math", "science", "history"]
        
    };
    obj.students.forEach((student)=>{
        let highestGrade=0
        let highestsubject=''
        obj.subjects.forEach((subject)=>{
            if(student.grades[subject]>highestGrade){
                highestGrade=student.grades[subject]
                highestsubject=subject
            }
        })
        console.log(highestsubject)

    })
}
SubjectwithHighestNumber() 
// Subject with the highest average grade among all students: "history"
// Function to Find Longest Palindrome Substring:
// Input:

// String: "babad"
// Expected Output:

// Longest palindrome substring: "bab" or "aba"
// Function to Count Subarrays with Equal Even and Odd Numbers:
// Input:

// Array of integers: [2, 5, 8, 7, 10, 3, 12, 6]
// Expected Output:

// Number of subarrays with an equal number of even and odd numbers: 4
// Function to Calculate Total Duration of a Music Playlist:
// Input:

// Array of song objects representing the music playlist:
// [ { title: "Song 1", artist: "Artist 1", duration: 180 }, { title: "Song 2", artist: "Artist 2", duration: 240 }, { title: "Song 3", artist: "Artist 3", duration: 200 } ]
// Expected Output:
function CalculateMusicAppDuration(){
 let arr=   [ { title: "Song 1", artist: "Artist 1", duration: 180 }, { title: "Song 2", artist: "Artist 2", duration: 240 }, { title: "Song 3", artist: "Artist 3", duration: 200 } ]
 let totalValue=0

arr.forEach((el)=>{
 totalValue+=el.duration
})
return ("Duration " +Math.floor(totalValue/60) + ':00 minutes')
}
console.log(CalculateMusicAppDuration())
// Total duration of the playlist in minutes and seconds: "10:00" (10 minutes)
// Function to Find First Non-Repeated Character:
// Input:
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
// String: "statistics"
// Expected Output:

// First non-repeated character: "a"
