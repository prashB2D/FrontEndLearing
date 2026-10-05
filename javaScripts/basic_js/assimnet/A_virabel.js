// ======================================================
// 1. Greatest of 5 Numbers
// ======================================================

let a = 10;
let b = 25;
let c = 15;
let d = 40;
let e = 30;

let greatest = (a > b && a > c && a > d && a > e)
    ? a
    : (b > c && b > d && b > e)
        ? b
        : (c > d && c > e)
            ? c
            : (d > e)
                ? d
                : e;

console.log("Greatest =", greatest);


// ======================================================
// 2. Smallest of 5 Numbers
// ======================================================

let n1 = 45;
let n2 = 20;
let n3 = 35;
let n4 = 10;
let n5 = 25;

let smallest = (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5)
    ? n1
    : (n2 < n3 && n2 < n4 && n2 < n5)
        ? n2
        : (n3 < n4 && n3 < n5)
            ? n3
            : (n4 < n5)
                ? n4
                : n5;

console.log("Smallest =", smallest);


// ======================================================
// 3. Check Positive, Negative or Zero
// ======================================================

let num = -25;

let positiveNegativeZero = (num > 0)
    ? "Positive Number"
    : (num < 0)
        ? "Negative Number"
        : "Zero";

console.log(positiveNegativeZero);


// ======================================================
// 4. Check Even or Odd
// ======================================================

let number = 27;

let evenOdd = (number % 2 == 0) ? "Even Number" : "Odd Number";
console.log(evenOdd);


// ======================================================
// 5. Check Leap Year
// ======================================================

let year = 2028;

let leapYearResult = (year % 400 == 0)
    ? "Leap Year"
     : (year % 100 == 0)
        ? "Not a Leap Year"
        : (year % 4 == 0)
            ? "Leap Year"
            : "Not a Leap Year";

console.log(leapYearResult);


// ======================================================
// 6. Student Grade
// ======================================================

let marks = 78;

let grade = (marks >= 90)
    ? "Grade A+"
    : (marks >= 80)
        ? "Grade A"
        : (marks >= 70)
            ? "Grade B"
            : (marks >= 60)
                ? "Grade C"
                : (marks >= 50)
                    ? "Grade D"
                    : "Fail";

console.log(grade);


// ======================================================
// 7. Check Triangle Type
// ======================================================

let side1 = 10;
let side2 = 10;
let side3 = 10;

let triangleType = (side1 == side2 && side2 == side3)
    ? "Equilateral Triangle"
    : (side1 == side2 || side2 == side3 || side1 == side3)
        ? "Isosceles Triangle"
        : "Scalene Triangle";

console.log(triangleType);


// ======================================================
// 8. Check Vowel or Consonant
// ======================================================

let ch = "e";

let vowelOrConsonant = (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u")
    ? "Vowel"
    : "Consonant";

console.log(vowelOrConsonant);




// ======================================================
// 10. Simple Calculator Using Conditions
// ======================================================

let x = 20;
let y = 5;
let operator = "*";

let calculatorResult = (operator == "+")
    ? `Result = ${x + y}`
    : (operator == "-")
        ? `Result = ${x - y}`
        : (operator == "*")
            ? `Result = ${x * y}`
            : (operator == "/")
                ? `Result = ${x / y}`
                : "Invalid Operator";

console.log(calculatorResult);