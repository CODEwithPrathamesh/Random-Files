// Functions are very much useful because it simplifies your code
// Abstractions --- It will give us a way to hide the complexity of our code

// a new and abastract way

// var todos = [];
// function repea(5, i => {
//     todos.push(`Todo ${i}`);
// });

// filtering 
var arr = [12,234,53,23];
function filter1(a){
    return a>20;
}

console.log(arr.filter(filter1));

var arr2 = [12,32,4,21];
function filter2(queries){
    return queries%2 === 0;
}

console.log(arr2.filter(filter2));

var arr3 = ['00:00:00 PM','01:00:00 PM','02:00:00 PM'];
function filter3(qui){
    return (el) => {
        return el.indexOf(qui) > -1;
    }
}

var result1 = arr3.filter(filter3('AM'));
console.log(result1);
var result2 = arr3.filter(filter3('PM'));
console.log(result2);

if(result1 !== []){
    console.log("Cool Night Coding");
}
if(result2 !== []){
    console.log("Fiar Enough let's begin");
}