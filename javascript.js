/*
console.log("How are you doing today");
console.log("How are you doing today");


let message='Hello, World!'

let intro;
//JavaScript use camelCase

intro= message
alert(message);

let $ = 2;
let _ = 2;
alert($+_);

// To declare a constant (unchanging) variable, use const instead of let
// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:
// In other words, capital-named constants are only used as aliases for “hard-coded” values.

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#FF7F00";

let color = COLOR_BLUE;
alert(color);

// A variable name should have a clean, obvious meaning, describing the data that it stores.

let admin;
let name$;

name$ = "John";
admin = name$;
alert(admin);

let planet_earth;
let user_Visiting_name;
    


let myInt = 7896;

console.log(myInt);

// typeof myInt;  --->Should be used in console


let text = "A,BC,D,E,F,G,H,IJ,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

let len = text.length
console.log(len);

let slicing  = text.slice(5)
let negSlicing = text.slice(-8)
console.log(slicing)
console.log(negSlicing);

let replacing = text.replace("ABCD","abcd")
// let replacing = text.replace("ABCD/i","abcd")    --->Removes case sensitivity
// let replacing = text.replace("ABCD/g","abcd")    --->Replaces all the values instead of the first one.       
console.log(replacing);

let lowerCase = text.toLowerCase()
console.log(lowerCase)


let upprCase = replacing.toUpperCase()
console.log(upprCase)

let concati = text.concat(replacing);
console.log(concati);

let splitting = text.split(",")
console.log(splitting);

// if, else if ,else statements

let ifCondition = 65;

if (ifCondition>= 100) {
    console.log("It's very big!");
} else if (ifCondition <= 6) {
    console.log("You have to choose another number!");
} else {
    console.log("It's very small!");
}


// --->Checking the credentials of the users.

let user = prompt("Who's there?")

if (user === "Admin"){
  let pass = prompt("Enter the password!")

    if (pass === "TheMaster"){
        alert("Welcome Master!")
    } else if (pass === null || pass ==="") {
        alert("Canceled")
    } else {
        alert("Wrong password!")
    }
} else {
    alert("Unauthorized User")
}


function squared(num) {
    return num * num;
  }
  
  function cubed(num) {
    return num * num * num;
  }
  
  function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
  }
  input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
      para.textContent = "You need to enter a number!";
    } else {
      para.textContent = `${num} squared is ${squared(num)}. `;
      para.textContent += `${num} cubed is ${cubed(num)}. `;
      para.textContent += `${num} factorial is ${factorial(num)}. `;
    }
  });
  */

const arrayExample = ["String", 45, true, "Another string"];
console.log(arrayExample[2]);