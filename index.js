/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

console.log("\n-----------EXERCISE 1-----------\n");	


function area(l1, l2){
  let associatedRetangle = l1*l2
  return associatedRetangle
}

console.log("This is a size of the associated ractangle:", area(6, 8)); 

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("\n-----------EXERCISE 2-----------\n");	

function crazySum(x,y){
  //!== x non e uguale a y - return x + y 
    if(x !== y) {
     return x + y
    }else {
      return (x+y)*3
    }
  }
  
  console.log("If the two values are the same:",crazySum(5,5));
  console.log("If the two values are the diffrent:",crazySum(6,5))
  
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("\n-----------EXERCISE 3-----------\n");	

function crazyDiff(f){
    if(f<=19) {
      return 19 - f
  } else {
      return (19 - f)*3
  }
  }
  console.log("The absolute difference:",crazyDiff(14))
  console.log("The absolute difference tripled:", crazyDiff(22))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("\n-----------EXERCISE 4-----------\n");	

function boundary(n){
  if (n > 20 && n < 100 || n === 400){
    return true;
  } else {
    return false;
  }
}
  console.log("Is n within 20 and 100 or it's equal to 400?", boundary(2))
  console.log("Is n within 20 and 100 or it's equal to 400?", boundary(50))
  console.log("Is n within 20 and 100 or it's equal to 400?", boundary(400))


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("\n-----------EXERCISE 5-----------\n");	

function strivify(text) {
  if (text.startsWith("Strive") === true) {
    return text;
  }else {
    text = "Strive" + text;
    return text;
  }
}
console.log(strivify(" is good!"));
console.log(strivify("Strive"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log("\n-----------EXERCISE 6-----------\n");	

function check3and7(u) {
  if (u >= 0 && u % 3 == 0 || u % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(check3and7(12));
console.log(check3and7(14));
console.log(check3and7(10));
console.log(check3and7(11));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("\n-----------EXERCISE 7-----------\n");

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Strive"));


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("\n-----------EXERCISE 8-----------\n");

function upperFirst(str) {
  str = str.split(" ");
for (let i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
 return str.join(" ");
}

console.log(upperFirst("Today is really hot."));

console.log("\n-----------EXERCISE 8-----------\n");
console.log("--------ANOTHER SOLUTION--------");

function upperFirstSecond(strSecond){
  let words = strSecond.split(" ");
  for(let i = 0; i < words.length; i++){
    let word = words[i].split(" ");
    word[0] = word[0].toUpperCase();
    let newWords = word.join(" ");
    words[i] = newWords;
    }
    return words.join(" ");
}

console.log(upperFirstSecond("Today is really cold."));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("\n-----------EXERCISE 9-----------\n");


function cutString(stringThree){
anotherString = stringThree.slice(1,-1);
return anotherString
}

console.log(cutString("Today is really hot."));


/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("\n-----------EXERCISE 10-----------\n");

function giveMeRandom(n) {
  let arrWithNums = [];
  for(i = 0; i < n; i++) {
      arrWithNums.push(Math.floor(Math.random() * 10));  }
  return arrWithNums;
}

console.log(giveMeRandom(4));
console.log(giveMeRandom(8));

console.log("\n---------------------------------\n");


/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/