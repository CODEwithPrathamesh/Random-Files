// 1. Problem

// for(let i = 0;i<=7;i++){
//     for(let j = 0;j<i;j++){
//         console.log("# ");
//     }
//     console.log("\n");
// }

// 2.Problem

// for(let j = 1;j<=100;j++){
//     if(j%3 === 0 && j%5 !== 0){
//         console.log(j + "Fizz");
//     }else if(j%5 === 0 && !(j%3 === 0)){
//         console.log(j + "Buzz");
//     }else if(j%3 === 0 && j%5 === 0){
//         console.log(j + "FizzBuzz");
//     }
// }

//3. Problem

var order = require("readline-sync");
var rows = order.question(console.log("Provide me rows"));
var columns = order.question(console.log("Provide me columns"));

for(let i = 1;i<=rows;i++){
        if(i%2 !== 0){
            console.log(" ")
        }
        for(let j = 1;j<columns;j++){
            console.log("#")
        }
        if(i%2 === 0){
            console.log(" ");
        }
        console.log("\n");
}