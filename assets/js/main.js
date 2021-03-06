// Anything within curly brackets {} after a function is called function scoped
// Anything within curly brackets {} after a statement is called block scoped

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
console.log(name2.length);

// ANONYMOUS FUNCTIONs - Equal to variable. The variable gets stored at the top level in the same way as the function. But we don't have the value from the function until we go down the file
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

let a3 = function () {
  let a3 = 20;
  return a3;
};

console.log(a3());

let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

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

// SCOPES

let number4 = 10; // Global scope - Variable is declared in the root of the file. It can be used anywhere

function calc() {
  return number4;
}

console.log(calc());

function calc() {
  let number5 = 10; // Local scope - Variable is declared in a function. console.log(number5); won't work
  return number5;
}

console.log(calc());

if (1 == 1) {
  var b1 = 10;
}
console.log(b1);

if (1 == 1) {
  let b2 = 10;
}
// console.log(b2);

const EXAMPLE = 10; // const variables cannot be changed as they are constant/constantly remain the same
console.log(EXAMPLE);
// EXAMPLE = 120;

let a2 = "First";
let b = "Second";
let c = "Third";

console.log(a2 + " " + b + " " + c);

let name01 = "Daniel";
let eyeColor01 = "Blue";
let age01 = 27;

let name02 = "John";
let eyeColor02 = "Brown";
let age02 = 35;

let name03 = "Jane";
let eyeColor03 = "Brown";
let age03 = 47;

let updateAge = function (age) {
  return ++age;
};

/*
let person = new Object();

person.name = "Daniel";
person.eyeColor = "Blue";
person.age = 27;
person.updateAge = function() {
    return ++person.age;
}

console.log(person.name);
console.log(person.age);
person.updateAge();
console.log(person.age);
*/

/*
let person = {
  name: "Daniel",
  eyeColor: "Blue",
  age: 27,
  updateAge: function () {
    return ++person.age;
  },
};

console.log(person);
*/

function Person(name, eyeColor, age) {
  this.name = name;
  this.eyeColor = eyeColor;
  this.age = age;
  this.updateAge = function () {
    return ++this.age;
  };
}

let person01 = new Person("Daniel", "Blue", 27);
let person02 = new Person("Jane", "Brown", 43);

console.log(person01.name);
console.log(person01.updateAge());
