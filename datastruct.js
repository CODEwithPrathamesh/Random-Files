// Data Structures are property to store the large amount of data as sets and storage where it is done is data structure
// -------------------------------------------------------------------------- //
//  1. Arrays

let arr = [21,342,45,46,67]; // This is declaration and assigning values to the array
let x = Math.round(Math.random() * 4);
console.log(arr[arr.length - x]); // Printing values of the array in a square bracket

arr.push(12); // Stacked element to the last position of an array
console.log(arr);
arr.pop(); // Removed the last element from the last positon of an array
console.log(arr);

// 2. Objects
function info(name1,name2,gender,quirk){
    var obj = {
        name: name1 + name2,
        g:  gender,
        speciality: quirk
    }
    function myfunc() {
        console.log(obj.name);
        console.log(obj.g);
        console.log(obj.speciality);
    }
    return myfunc();
}
 info("Prathamesh","Shendarkar","Male","Developer");

let obs = {
    left: "1",
    right: "2",
    top: "3"
}

// Properties
//1. delete;  It wil delete particular property from an object
delete obs.top;
console.log(obs.top);

//2.  in;   It will check is there any particular property in an object and if it is then will return boolean
console.log("top" in obs);
console.log("left" in obs);

//3. keys   *** It will return all property names available in a particular object -- Syntax: Object.keys(object)
console.log(Object.keys(obs));

//4. assign  // It will assign all values from one particular object to another one -- Syntax: Object.assign(target,source)
let obj2 = {

}
console.log(Object.assign(obj2, obs));

// Simple exercise for entrying the data into object and storing it into an array;

let journal = [];
function entry(day, mood){
    journal.push({day, mood});
}
entry("Wednesday", "Happy")
entry("Thursday", "So cool");
entry("Friday", "Always Happy");
console.log(journal);

// Acessing Days
console.log(journal[0].day + " " + journal[0].mood);
console.log(journal[1].day + " " + journal[1].mood);
console.log(journal[2].day + " " + journal[2].mood);

// New for loop for arrays
let array1 = [2,3,4,64];
for(let i of array1){
    console.log(i);
    // console.log(`${i.events.length} events`);
    if(arr in array1){
        console.log("Cool :-)");
    }
}

// Lets go to array properties
// 5. shift --- Removes the 1st element from the array

array1.shift();
console.log(array1);

// 6. unshift --- Inserts somthing to the first index of an array
array1.unshift("Hey you");
console.log(array1);

// 7. indexOf() --- Takes the parameter as an element of an array and returns the index present at that point
console.log(array1.indexOf(3));

// 8. lastindexOf() --- Searches from last Takes the parameter as an element of an array and returns the index present at that point
console.log(array1.lastIndexOf(64));

// 9. array.slice(i,j) --- where i is the start index and j is the end index and here last index is exclusive
console.log(array1.slice(2,3));
console.log(array1);

// 10.concat 
// let array2 = [43,43,43,43];
// array1.concat(array2.slice(0));
// console.log(array1);

// String Properties --- Let's Start
// 1. slice
var str1 = "HeyYou";
console.log(str1.slice(3));
str1 = "Hey You";
console.log(str1.trim())

// 2. padStart
console.log(String(18).padStart(6, "0"));

// 3. repeat
console.log("Hello Mohit ".repeat(3));

// -------------------------------
// Rest parameters
function myfreak(HeyMan,...numbers){
    console.log(numbers);
    for(let i of numbers){
        console.log(i);
    }
    console.log(HeyMan);
}
myfreak("Hello Girls",1,4,2,"hey you",5.0);

// About Math Object
// 1. Math.random
// 2. Math.cos() Math.sin Math.tan --- for Trignometric calculations
// 3. Math.acos Math.asin Math.atan --- for inverse trignometric calculations
// 4. Math.floor or Math.ceil --- which is for rounding the number to the nearest whole number
// 5. Math.round --- Which is used for rounding the number to the nearest Natural Number
// 6. Math.abs --- Which takes aproximate value that means which returns positive value and negates negative value
