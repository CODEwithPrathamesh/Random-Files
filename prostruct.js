// var's start with program structure

var readline = require("readline-sync");

console.log("1. Variables,var and constant");
console.log("2. Functions");
console.log("3. if-else loops");
console.log("4. while loops");
console.log("5. do-while loops");
console.log("6. for-loops");

var typer = Number(readline.question("Type the number "));

switch(typer){
//variables are to be declared as like this only (1. no start with numbers && 2. can include '$' or '_' but no other punctuation)
//1. var
case 1: 
var myname1 = "Prathamesh";
console.log(myname1);

//2. var(not useful but still can be used to declare global variables)
var myname2 = "codeu"
console.log(myname2);

//3. const(useful all the time when a global variable is not changable)
const mynames = "Prathamesh   Codeu"
console.log(mynames);
break;

case 2:
//functions
//1. Math.max and Math.min
var max1 = Math.max(654, 465, 567, 195, 375, 582, 987);
var max2 = Math.max(546, 564, 6, 43, 67, 365, 1322);
var max3 = Math.max(654, 465, 567, 67, 365, 1322);

var mins = Math.min(max1, max2, max3);
console.log(mins);

//2.Number and NumberisNaN -- Number converts string of number to number and NumberisNaN replies true if number given is NaN
// Number(prompt("Pick a number"));
// NaN
// Number(prompt("Pick a number"));
// 123
// prompt("Pick a number");
// "123"
// prompt("Pick a number");
// "af"

var test1 = 1234;
var test2 = "Hello world";
var check1 = Number.isNaN(test1); 
var check2 = Number.isNaN(test2);

console.log(check1);
console.log(check2);

check1 ?  console.log(Math.random()):console.log( Math.max(132,432,135,212,342)); 
break;

case 3:
// if-else loops
if((check1 && check2)|| (test1 && test2) || (mins === max1 || mins === max2 || mins === max3)){
    console.log("Bo yaah it's fucking awesome");
}

if (Math.random() >= 0 && Math.random() <= .2) {
    console.log("Hmmm nice :) ")
}else {
    console.log(" :( ")
}
break;

case 4:
// while loops
var number = 0;
while (number<=12) {
  console.log(number);
  number += 2;
}console.log('HEY');
if(number !== 12){number = 12;}
console.log(number);
break;

case 5:
// do-while loops
var fact = 5,num = 1;
do{
    num *= fact
    fact--;
}while(fact>=1);
console.log(num);
break;

case 6:
// for loop
for(var i = 0;i<=12;i+=2){
    console.log(i);
}
console.log(i)

// break
for(var k = 1;k<=4;k++){
    console.log(k);
    if(k%3 === 0){break;}
}

// continue
for(var k = 1;k<=6;k++){
    if(k%3 === 0 || k%5 === 0){
        continue;
    }else if(k%1 === 0){
        console.log(k);
    }
}
break;

default: 
console.log("Just put the fucking right number");
break;
}
// Important it.s for taking input
// var reas = require('readline-sync');

// var name = reas.question("What is your name?");

// console.log("Hi " + name + ", nice to meet you.");