// 1.sum
// const cons = require(readline-sync);
// var ques = cons.question("Input me two numbers");


// function rsum(a,b){
//     if(a<b){
//         for(let i = a;i<=b;i++){
//             lis.push(i);
//         }
//     }else if(a>b){
//         for(let i = b;i<=a;i++){
//             lis.push(i);
//         }
//     }else {
//         lis = [a,b];
//     }
// }

// rsum(1,10);
// var array1 = [];
// var consta = (array1) => {
//     let lis = [];
//     let sum = 0;
//     let x = Math.max(...array1);
//     let y = Math.min(...array1);
//     let len = array1.length;
//     if(x !== y){
//         for(let i = array1[len-2];i<=x;i++){
//             lis.push(i);
//             sum += i;
//         }
//     }else {
//         lis = [x];
//         sum = x*2;
//     }
//     console.log(lis);
//     console.log(sum);
// }
// consta(1,4,5);
// consta(1,10);
// consta(-1,1,5);

// ------------- SUM2 -----------------------
var temp = 0;
function reversearr(array1){
    let len = array1.length;
    for(let i = 0;i<len;i++){
        temp = array1[i];
        array1[i] = array1[len-i-1];
        console.log(array1[len-i-1]);
        array1[len-i-1] = temp;
        temp = 0;
    }
    console.log(array1);
}
reversearr([1,2,3,4,5]);