2.//Write a java script program, which enters marks in three subject of a students and calculate its average. if the average is 33 or more than print pass, otherwise print fai

let subject1 = 40; 
let subject2 = 35; 
let subject3 = 30; 
let average = (subject1 + subject2 + subject3) / 3;
if (average >= 33) {
    console.log("Pass");
} else {
    console.log("Fail");
}