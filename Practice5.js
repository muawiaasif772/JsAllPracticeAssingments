// Create an object representing a car with properties such as make, model, and year. Print out a sentence that includes the car's make, model, and year.
let Car={model:'Totyta',year:'2021'}
   for (const key in Car) {
    if (Object.hasOwnProperty.call(Car, key)) {
        console.log(`${key}:${Car[key]}`);
        
    }
   }
// Using a for loop, print the elements of an array in reverse order.
function reverseArry(arr){
    let newArr=[]
for(let i=arr.length;i>=0;i--){
    // console.log(arr[i])
    newArr.push(arr[i])
    // newArr.shift()
}
return newArr
}
let arr=[1,2,3,4,5,6]
console.log(reverseArry(arr))
// Create an object representing a book with properties such as title, author, and number of pages. Write a function that takes a book object as input and prints out the book's title and author.
function BooksData(obj){
    console.log(obj.title)
    console.log(obj.author)
}
let BookObj={title
    :'Natural Resources Of Pakistan',bookPage:123,author:'Mr Muhammad Ahmad'
}
console.log(BooksData(BookObj))

// Create an object representing a shopping cart with properties such as items (an array of items) and total (the total cost of the items). Write a function that adds an item to the shopping cart and updates the total cost.
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    addItem(item) {
        this.items.push(item);
        this.total += item.price;
    }
}

const cart = new ShoppingCart();
cart.addItem({ name: 'T-shirt', price: 100 });
cart.addItem({ name: 'Trozer', price: 40 });

console.log(cart.items); 
console.log(cart.total); 


// Create an object representing a bank account with properties such as account number and balance. Write functions to deposit and withdraw money from the account and print the current balance.
class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
      console.log(`A/c No.: ${accountNumber}`);
      console.log(`Opening Balance: $${balance}`);    
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
    }
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn: $${amount}`);
      } 
      else 
      {
        console.log(`Want to withdrawn: $${amount}`);
        console.log('Insufficient balance');
      }
    }
    displayBalance() {
      console.log(`Account Balance: $${this.balance}`);
    }
  }
  const account = new BankAccount('SB-123', 1500);
  account.deposit(500);
  account.withdraw(400);
  account.displayBalance();
  account.withdraw(1800);
  account.displayBalance();
  
// Create an object representing a student with properties such as name, grade, and subjects (an array of subjects). Write a function that adds a subject to the student's list of subjects.
class student{
    constructor(name,age,grade,subject){
 this.name=name
 this.age=age
 this.grade=grade
 this.subject=subject
    }
    addBook(sub){
        this.subject += sub
    }
}
let book=new student('muawia',12,'A+', 'math')
console.log(book)
book.addBook(" , " +' English'+" ,")
console.log(book)
book.addBook( ' Science')
console.log(book)

// Create an object representing a movie with properties such as title, director, and rating. Write a function that changes the rating of the movie and prints out the updated rating.
class Movie{
    constructor(title,director,rating,){
 this.title=title
 this.director=director
 this.rating=rating
 
    }
    updatedRating(update){
        this.rating = update
    }
}
let movie=new Movie('Mad Max','Charles Addone',4.5)
console.log(movie)
movie.updatedRating(4.9)
console.log(movie)

// Using a for in loop, iterate over an  object and print the key-value pairs.
let person={
    name:'muawia',city:'tmp',age:'87'
  }
 for (const key in person) {
  console.log( `${person[key]}`)
 }

// Using a for of loop, calculate the sum of all the numbers in an array.
function arrSum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
console.log(arrSum([2,4,5,6,89,0]))





// Write a function that takes an array of numbers as input and returns a new array with only the positive numbers.
function PositiveArray(arr){
 return arr.filter((el)=>el>=0).map((el)=>el)
}
console.log(PositiveArray([2,3,4-8,5,6,-9,-1]))

// Write a function that takes a number as input and returns the sum of all the digits in the number.
function SumOfDigits(num){
    let sum=0;

    for(let i=0;i<=num;i++){
        sum+=i
    }
    return sum
}
console.log(SumOfDigits(7))
// Write a function that takes a number as input and returns the number in reverse order.
function printDigits(num){
    for(let i=num;i>=1;i--){
        console.log(i)
    }
}
printDigits(8)