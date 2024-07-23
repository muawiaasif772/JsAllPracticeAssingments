// Object Representation of a Book:
// Input:

// Book object with properties (e.g., title, author, number of pages)
// Expected Output:
function UniversityData() {
    let library = [
        {
            title: 'Bill Gates',
            author: 'The Road Ahead',
            pages: 456
        },
        {
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            pages: 123
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            pages: 345
        }
    ];

    library.forEach(book => {
        console.log("Book Autor Name:" + book.author);
        console.log("Book title :" + book.title);
    });
}

UniversityData();

// Print the book's title and author.

function StudentData(obj) {
    return `Student's name is ${obj.name} and age is ${obj.age}.`;
}

let obj = { name: 'muawia', age: 23, grade: 89 };
console.log(StudentData(obj));

// Function to Calculate Circle Area:
// Input:
function CircleArea(radius){
    let pi=Math.PI
    // area of circle pi*(radius*radius)
    return pi*(Math.pow(radius,2))
}
console.log(CircleArea(5))


// Car object with properties (e.g., make, model, year)
// Expected Output:
let Car={make:'Pkaistan',model:'CIVIC',year:'2022'}
console.log(`Car made in ${Car.make} model ${Car.model} year ${Car.year}`)
// Return a formatted string with the car details.
// Function to Check if a Person is an Adult:
// Input:

// Person object with properties (e.g., name, age, address)
// Expected Output:
function Person(){
    let obj={name:'hamza',age:12,adress:'Mua Mastoi street-2'}
    return obj.age>18?true:false
}
console.log(Person())
