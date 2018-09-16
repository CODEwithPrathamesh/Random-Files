// Strings literals escaping characters
var str1 = "John Say's \"How are you everything seems okay. I am a new line character \'\\n\'.\"\n";
console.log(str1);

var str2 = "A newline character is written like \"\\nnnnnnnnnhhhhhhhhh\".\n"
console.log(str2);

//Backticks concept about string literals template ${ } what it does is it return your number into string or template
// ${ mathematical expressions can be involved in this thing }
var str3 = `Hello Siraj do you have a  $${100/2 + 1 + 100*1 - 10/2} penny let me know\n`;
console.log(str3);

// var normal = "Hello
//                                 world"; This type of things is not possible so use backticks
// I have done 6 dice face of expression in string literals
var normal = `Helllo World ${ Math.round(Math.random() * 6) }\n
Hey siraj it's working\n`
console.log(normal);

// Unary and Binary OPerators
console.log(typeof object);         //typeof is a unary operators because it accecpts single argument i.e single number
console.log(typeof null);;
console.log(typeof NaN);            //- +  can be and cannot be  binary operators because it can accecpts single argument i.e single number or more no.s
console.log(typeof undefined);
console.log(typeof Infinity);
console.log(-(12-35)*(13-54)*(43));


// Ternary operators         expression?true:false
str1 > str2 ? console.log(1) : console.log(0);
var dice = Math.round(Math.random()*6);
console.log(dice);
dice===6?console.log("Wohhooooooo"):console.log("Fuck you");