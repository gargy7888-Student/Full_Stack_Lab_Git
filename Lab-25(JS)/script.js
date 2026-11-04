// calculating cube of a number using function-------------------------------------------------------------------------------

// function cube(num){
//     return num**3;
// }

// let num = parseInt(prompt("Enter a number to cube:"));
// const cubeofnum = cube(num);
// alert(cubeofnum);





// checking age using function--------------------------------------------------------------------------------------------- 

// function isAdult(age){
//     if (age <18){
//         return false;
//     }
//     else{
//         return true;
//     }

// }

// let age = prompt("Enter your age:");
// const age_c = isAdult(age);
// alert(age_c);



// calculating BMI ----------------------------------------------------------------------------------------------------------


// function calBMI(weight, height){
//     BMI = weight/ (height*height);
//     return BMI
// };

// let weight = parseInt(prompt("Enter your weight"));
// let height = parseFloat(prompt("Enter your height"));
// const calculateBMI = calBMI(weight, height);
// alert(calculateBMI);



// calculating grade from marks----------------------------------------------------------------------------------------------

// function calGrade(marks){
//     if (marks>=90){
//         return "Grade A";
//     }
//     else if (marks>=75){
//         return "Grade B";
//     }
//     else if (marks>=50){
//         return "Grade C";
//     }
//     else{
//         return "Grade F";
//     }
// }


// let n = parseFloat(prompt("Enter your marks"));
// const calculateGrade = calGrade(n);
// alert(calculateGrade);



// calculating discount applied on price --------------------------------------------------------------------------------------

// function applyDiscount(price, is_member = false){
//     if (is_member){
//         return price - (price*(10/100))
//     }
//     else{
//         return price    
//     }
// }

// let price = parseInt(prompt("Enter price: "))
// let is_member = prompt("Should apply discount?(Y/N)")
// if (is_member === 'Y'){
//     is_member = true
// }
// else{
//     is_member = false
// }
// const calprice = applyDiscount(price, is_member)
// alert(calprice)



