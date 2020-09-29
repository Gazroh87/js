// document.body.innerHTML = "This is some content";

// String data type
let name = 'Gary "hello" Hughes ';
let number = "134324";

// Numeric data type
let num = -1; // Float numeric data type
let integer = -327864.9238473;

// Boolean data type
let bool1 = true; // or = 1
let bool2 = false; // or = 0

// Undefined data
let hey; // Haven't defined any data to the variable

// Null data type
let hey2 = null; // = Nothing

console.log(name);

console.log(typeof name); // Tells you in the console the data type of the variable

/* Assignment Operators 

=   Assigning a value
+=  Add something to the value
-=  Take away from the value
*=
/=
%=  Percentage of the value
==  Check if something is equal to the value
!=  Check if something is not equal to the value
>=  Value is greater than...
<=  Value is less than...
=== Check something for matching data type and value
!== Check something for none matching data type or value

*/

let number2 = 10;
// number2 = number2 + 5;
number2 += 5; // Add 5 to the current value of the variable

/* Arithmetic Operators
+
-
*
/

*/

let number3 = 5 * 10;

/* String Operators
++
*/

let myAge = 33;
let info = "My name is Gary, I'm " + myAge + " years old. " + 10;
console.log(info);

let numbers = 4 + " " + 5; // Create space between numeric data
console.log(numbers);

// Conditional Statements
let x = 10;
let y = 19;
// || = Pipe symbol, means or
// && = Something & something

if (x == 10 || y < 20) {
  console.log("If! 1");
}

if (x == 10 && y < 20) {
  console.log("If! 2");
}

if (x == 10 && y > 20) {
  console.log("If! 3");
} else {
  console.log("Else! 1");
}

if (x == 10 && y < 20) {
  console.log("If! 4");
} else if (x > 50) {
  console.log("Else if! 1");
} else {
  console.log("Else! 2");
}

let gender = "Male";
let age = 26;

if (gender == "Male") {
  if (age >= 18) {
    console.log("You are a " + gender + " and above the age limit!");
  } else {
    console.log("Sorry dude! You are below the age limit!");
  }
} else if (gender == "Female") {
  if (age >= 18) {
    console.log("You are a " + gender + " and above the age limit!");
  } else {
    console.log("Sorry lady! You are below the age limit!");
  }
} else {
  console.log("Can't figure out your gender!");
}

let items = ["Bottle", "Camera", "Juice", 4, true];

items[1] = 8; // Changes the value of the corresponding index number (in this case the 2nd value "Camera")

console.log(items[1]);

// JavaScript Properties and Methods

let item = "Bottle of water";
console.log(item.length); // Length of item variable's value
console.log(item.indexOf("of")); // Starting index number of the value
console.log(item.substring(7, 9)); // substring = Get part of string. Display the value starting from index number 7 and stop at 9
console.log(item.replace("water", "Juice")); // Replace the first value with the next value
console.log(item.toUpperCase()); // Capitalize the whole value

let items2 = ["Bottle", "Camera", "Juice", 4, true];
console.log(items2);
let items3 = ["Bottle", "Camera", "Juice", 4, true];
console.log(items3.length);
let items4 = ["Bottle", "Camera", "Juice", 4, true];
console.log(items4.join(" - ")); // Join combines all values in the array into a single string
console.log(items4.join(", ")); // Join combines all values in the array into a single string
console.log(items4.join(" | ")); // Join combines all values in the array into a single string
console.log(items4.join(" & ")); // Join combines all values in the array into a single string
console.log(items4.join(" / ")); // Join combines all values in the array into a single string
console.log(items4.pop()); // Remove the last value in the array and display it in the console
let items5 = ["Bottle", "Camera", "Juice", 4, true];
items5.pop(); // Remove the last value in the array and then display the array in the console
console.log(items5);
let items6 = ["Bottle", 4, true];
items6.push("Juice"); // Add the value on to the end of the array as a string
let items7 = ["Bottle", 4, true];
console.log(items7.push("Juice")); // Display the index number of the added value
console.log(items6, items7); // Display the updated arrays

// NAMED FUNCTION - Stored at the top level inside JavaScript code. We can use this function whenever we want inside the code
function testExample(a, b) {
  let greeting = "Hi! My name is " + a;
  // console.log(greeting);
  return greeting; // Stores the variable but does not display it in the console
}

let name2 = "Daniel";
console.log(testExample("Nick"));
console.log(testExample(name2));

// ANONYMOUS FUNCTION - Equal to variable. The variable gets stored at the top level in the same way as the function. But we don't have the value from the function until we go down the file
let testExample2 = function (a) {
  let greeting = "Hi! My name is " + a;
  return greeting; // Stores the variable but does not display it in the console
};

let a = "Gary";
console.log(testExample2(a));

(function () {
  let greeting = "Hi! My name is Robert";
  console.log(greeting);
})();

// CALCULATOR
// Calculations must use number data types NOT strings
function calc() {
  // let a = document.querySelector("#value1").value; - (Outputs numbers as a string data type not number)
  let a = parseInt(document.querySelector("#value1").value); // Converts stringed numbers to integer number data type)
  let b = parseInt(document.querySelector("#value2").value); // Converts stringed numbers to integer number data type)
  let oper = document.querySelector("#operator").value;
  let calc;

  if (oper == "add") {
    calc = a + b;
  } else if (oper == "min") {
    calc = a - b;
  } else if (oper == "div") {
    calc = a / b;
  } else if (oper == "mul") {
    calc = a * b;
  }

  // console.log(calc);
  document.querySelector("#result").innerHTML = calc;
}
