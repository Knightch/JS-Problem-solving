// some data type

var num = 8;
console.log(typeof (num));
var name = 'Aman'
console.log(typeof (name));
var boolean = true;
console.log(typeof (boolean));
var value;
console.log(typeof (value));
var rate = 1.5;
console.log(typeof (rate));
var array = [];
console.log(typeof (array));
var object = {}
console.log(typeof (object));

// some mathematical operations
var x = 9;
var y = 1.27;
sub = x - y;
console.log("subtraction is " + sub);
sum = x + y;
console.log("sum is " + sum);
multi = x * y;
console.log("multipication is " + multi);
div = x / y;
console.log("division using oblique symbol " + div);
divs = x % y;
console.log("division using percentage symbol " + divs);

// using Math function
var z = Math.sqrt(x);
console.log("square root of " + x + " is " + z);

// condition statement

// if else statement
var raviAge = 18;
var gulsanAge = 0;
var amanAge = 30;
if (raviAge > gulsanAge) {
    console.log("Ravi is elder then Gulsan")
} else {
    console.log("Gulsan is elder then Ravi")
}

// if elseif and else statement
if (raviAge > gulsanAge) {
    console.log("Ravi is elder then Gulsan")
} else if (raviAge > amanAge) {
    console.log("Ravi is elder then Gulsan")
} else if (gulsanAge > amanAge) {
    console.log("Gulsan is elder then Aman")
} else if (gulsanAge > raviAge) {
    console.log("Gulsan is elder then Ravi")
} else if (amanAge > raviAge) {
    console.log("Aman is elder then Aman")
} else if (amanAge > gulsanAge) {
    console.log("Aman is elder then Gulsan")
}

// reverse counting number using loop
function reverseCounting(x) {
    for (let i = 0 ; i < x; i++) {
        console.log(x - i);
    }
}

reverseCounting(100);
