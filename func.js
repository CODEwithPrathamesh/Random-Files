// Defining a function
// Creating a square function
const f = function(base,expo){
    var result = 1;
    for(let i = 0;i<expo;i++){
        result *= base;
    }
    let i = 4; // Scope Explanation
    console.log(i);
    // console.log(i); it says i is not defined
    return result;
}

console.log(f(3,3));

// Nice example for function
// Creating a Dish recipe
// So we give know for 1 people this much ingridents required but for many peope(user input) how much ingridents required is to print

const tea = function(people){
    const ingridents = function(amount,unit,name){
        let ingamount = people*amount;
        if(ingamount > 1){
            unit += "s";
        }
        console.log(`${ingamount} ${unit} ${name}`);
    }
    ingridents(2,"teaspoon","sugar");
    ingridents(1,"teaspoon","teapowder");
    ingridents(1/2,"cup","milk");
    ingridents(1,"cup","water");
}
tea(7.5);

// We does not require to put our function in front or in back it can work in anyplace
// But the function should not be stored in particular value it should be called without binding
console.log("The future says:", future());

function future() {
  return "You'll flying cars";
}

// Arrow functions =>
var name = "Mohit Padrya"
const speaks = () => console.log("Hello " + name);
speaks();

const add = (a,b) => {if(b === undefined){a = -a;return a}else{return a+ b}};
console.log(add(2,4));

// Call stack if stack exceded the functions then what hapeens
// function chicken() {
//     return egg();
//   }
//   function egg() {
//     return chicken();
//   }
//   console.log(chicken() + " came first.");

  // Arguments
console.log(add(2,4,5)); // This one took first 2 arguments not looked for third one

console.log(add(2)); // This will see if the arguments are less if it is it will return negative sign

const world = (name = "World!!!" ) => {return "Hello " + name;};
console.log(world()); // This does not have any arguments but still due to given string passed as world we will get hello world
console.log(world("Golu")); // In this as the the given string is optional if we passed any string the world will be replaced by string

// closure
// closure has been applied as dice is placed inside dick
const roll = (dice) => {
    function dick(){
        if(dice < 0 || (dice%1 !== 0)){
            return console.log("Will you fucking put right number");
        }else {
            return Math.round(Math.random()*dice*6);
        }
    }
    console.log(dick());
}
roll(4);

// Recursive functions 
// The following function works as a Binary Tree
// Starts with left then if it doesn't satisfy needs then go to right side if it also doesn'nt satisfy needs then goes upwards
function solution(target) {
    function finds(current,history){
        if(current == target){
            return history;
        }else if(current > target){
            return null;
        }else {
            return finds(current + 5,`(${history} + 5)`) || finds(current * 3,`(${history} * 3)`);
        }
    }
    return finds(1,"1")
}

console.log(solution(24));

// Nice calling names
function playerscore(score,width){
    let scorelen = String(score);
    while(scorelen.length < width){
        scorelen = "0" + scorelen;
    }
    return scorelen;
}

function players(p1,p2,p3) {
    console.log(`${playerscore(p1,3)} Golu`);
    console.log(`${playerscore(p2,3)} Mohit`);
    console.log(`${playerscore(p3,3)} Pushkar`);   
}

players(100,8,40);

// Nice Concept
var reas = require('readline-sync');
var out = reas.question();
var j = 4.0;
var result = j + Number(out);
console.log(Number(result).toFixed(1));

var arr = [1,2,3.4,4,5];
arr.forEach(element => {
    console.log(element);
});
console.log(arr);
console.log(result/2);

function plusMinus(arr) {
    var plus=0,minus=0,zeros=0;
    arr.forEach(element => {
        if(element > 0){
            plus++;
        }else if(element < 0){
            minus++;
        }else {
            zeros++;
        }
    });
    var mainp,mainm,mainz,len = arr.length;
    mainp = plus/len;
    mainm = minus/len;
    mainz = zeros/len;
    
    console.log(mainp.toFixed(len+1));
    console.log(mainm.toFixed(len+1));
    console.log(mainz.toFixed(len+1));
}

plusMinus(arr);