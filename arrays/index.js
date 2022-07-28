var avgTemp = []
avgTemp[0] = 17
avgTemp[1] = 23
avgTemp[2] = 30
avgTemp[3] = 31
avgTemp[4] = 34
avgTemp[5] = 30
avgTemp[6] = 26
avgTemp[7] = 25
avgTemp[8] = 26
avgTemp[9] = 23
avgTemp[10] = 20
avgTemp[11] = 18

// initialize arrays in different ways
var daysOfWeek1stWay = new Array() //  simply declare and instantiate a new array using the keyword new
var daysOfWeek2ndWay = new Array(7) // we can create a new array specifying the length of the array
var daysOfWeek3rdWay = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday') // passing the array elements

var daysOfWeeks5thWay = [] // best practice
var daysOfWeeks6thWay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] // best practice passing argument

console.log("length of array is " + daysOfWeeks6thWay.length)

// accessing elements of arrays using for loop
for (let i = 0; i < daysOfWeeks6thWay.length; i++) {
    console.log(daysOfWeeks6thWay[i])
}

//  declare array
var fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;

for (let i = 2; i < 20000000; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for(let i=0;i<fibonacci.length;i++){
    console.log(`value of fibonacci index of ${i} is ${fibonacci[i]}`)
}