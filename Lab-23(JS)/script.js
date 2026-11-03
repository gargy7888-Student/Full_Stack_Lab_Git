// const POLICAD_QUESTION_DATA = {
//   "products": [
//     {
//       "id": 26,
//       "title": "Green Chili Pepper",
//       "price": 0.99
//     },
//     {
//       "id": 27,
//       "title": "Honey Jar",
//       "price": 6.99
//     },
//     {
//       "id": 28,
//       "title": "Ice Cream",
//       "price": 5.49
//     },
//     {
//       "id": 29,
//       "title": "Juice",
//       "price": 3.99
//     },
//     {
//       "id": 30,
//       "title": "Kiwi",
//       "price": 2.49
//     },
//     {
//       "id": 31,
//       "title": "Lemon",
//       "price": 0.79
//     },
//     {
//       "id": 32,
//       "title": "Milk",
//       "price": 3.49
//     },
//     {
//       "id": 33,
//       "title": "Mulberry",
//       "price": 4.99
//     },
//     {
//       "id": 34,
//       "title": "Nescafe Coffee",
//       "price": 7.99
//     },
//     {
//       "id": 35,
//       "title": "Potatoes",
//       "price": 2.29
//     }
//   ],
//   "total": 194,
//   "skip": 25,
//   "limit": 10
// };

// const data = POLICAD_QUESTION_DATA;

// // Write your code below

// const items = data.products;
// //let sum = 0;
// let i = 0;
// let Max = 0;
// const n = items.length
// while (i<= n-1){
//   //console.log(items[i]['title']+" : "+ Math.round(items[i]['price']*100))
//   //sum+=Math.round(items[i]['price']*100)
//   if (n == 0){
//     console.log("No item in the Data.")
//   }
//   else{
//     if (Max < Math.round(items[i]['price']*100)){
//         Max = Math.round(items[i]['price']*100)
//         product_title = items[i]['title']
//     }
//   }

//   i++;
// }
// //console.log("Total_Price:",sum)

// console.log(product_title,":",Max)



// const students = {
//     name: "Ajay",
//     age: 20,
//     rollnumber: "2616400123"
// }

// const {name, age} = students;

// console.log(name, age)

// const {rollnumber, country} = students;

// console.log(rollnumber, country)


// const fruits = ["apple", "banana", "mango"]
// const [first, second] = fruits

// console.log(first, second)


// const s1 = {name: "Ajay"};
// const s2 = {name: "Ajay"};

// const s3 = s1;

// console.log(s1==s2)
// console.log(s1==s3)
// console.log(s1===s2)
// console.log(s1===s3)



// const POLICAD_QUESTION_DATA = {
//   "students": [
//     { "id": 1, "name": "Ravi", "marks": 72 },
//     { "id": 2, "name": "Amit", "marks": 35 },
//     { "id": 3, "name": "Sneha", "marks": 88 },
//     { "id": 4, "name": "Priya", "marks": 40 },
//     { "id": 5, "name": "Karan", "marks": 29 }
//   ]
// };

// const data = POLICAD_QUESTION_DATA;


// // Write your code below
// const {students} = POLICAD_QUESTION_DATA
// const n = students.length
// let i = 0
// while (i<n){
//   if(students[i]["marks"] >=40){
//     console.log(`${students[i]["name"]} : Pass`)
//   }
//   else{
//     console.log(`${students[i]["name"]} : Fail`)
//   }
//   i+=1
// }





// const POLICAD_QUESTION_DATA = {
//   "products": [
//     { "id": 1, "title": "Wireless Mouse", "rating": 4 },
//     { "id": 2, "title": "Keyboard", "rating": 2 },
//     { "id": 3, "title": "Monitor", "rating": 5 },
//     { "id": 4, "title": "USB Cable", "rating": 1 },
//     { "id": 5, "title": "Laptop Stand", "rating": 3 }
//   ]
// };

// const data = POLICAD_QUESTION_DATA;


// // Write your code below
// const {products} = POLICAD_QUESTION_DATA;
// const n = products.length

// let i = 0;
// while (i<n){
//   if (products[i]["rating"] === 1){
//     console.log(`${products[i]["title"]} : ★☆☆☆☆`)
//   }
//   else if (products[i]["rating"] === 2){
//     console.log(`${products[i]["title"]} : ★★☆☆☆`)
//   }
//   else if (products[i]["rating"] === 3){
//     console.log(`${products[i]["title"]} : ★★★☆☆`)
//   }
//   else if (products[i]["rating"] === 4){
//     console.log(`${products[i]["title"]} : ★★★★☆`)
//   }
//   else if (products[i]["rating"] === 5){
//     console.log(`${products[i]["title"]} : ★★★★★`)
//   }
//   i++;
// }


