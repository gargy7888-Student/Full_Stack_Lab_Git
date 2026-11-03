// const student = {
//     name:"Yashraj",
//     age: 19,
//     batch: "Lecun"
// };

// console.log(student);
// student["name"] = "Naman";
// console.log(student);

// const student2 = {
//     name:"Yashraj",
//     name: "naman",
//     age: 19,
//     batch: "Lecun"
// };

// console.log(student2)



// Array

const students = ["aditya", "priya", "aarayan", "kudrat"]

console.log(students)
console.log(typeof students)


// --------------------------------------Methods---------------------------------------------------

// push -> same as append in python

students.push("Naman")
console.log(students)

// this will adds whole the array inside an array
// students.push(["dhaumya", "nitish", "yashraj"])
// console.log(students)


// adding multiple elements at the end of the array
students.push("dhaumya", "nitish", "yashraj")
console.log(students)

// pop -> to remove the last element from an array
console.log(students.pop())
console.log(students)
const lastvalue = students.pop()
console.log(lastvalue)
console.log(students)



// shift -> removes the element from the start(0 Index) of the list.

students.shift()
console.log(students)

// unshift -> adds an element at the start(0 Index) of the list.

students.unshift("naman")
console.log(students)

// adding multiple elements at the start of the array
students.unshift("dhaumya", "nitish", "yashraj")
console.log(students)


const len = students.length;

console.log(students[len-1])

// reverse indexing doesn't works in JS.


// splice -> same as slicing but it removes the elemets (function name(start index, delete count)). works as all the methods like shift(0,1), unshift(0,0, string), push(len-1, 0, string), pop(len-1, 1)

console.log(students)

students.splice(2, 1)
console.log(students)


// console.log(students)

// students.splice(2)
// console.log(students)



// console.log(students)

// students.splice(2, 1, "guneesh")
// console.log(students)



// console.log(students)

students.splice(2, 2, "guneesh")
console.log(students)