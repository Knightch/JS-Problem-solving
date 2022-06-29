// length property returns the length of a string
let text = 'anoskodjlcdmlkcndkckldmcljcsdklnslkdlwks'
console.log(text.length);

// extracting string using #slice #subtracting #substr
let string = 'Apple, Banana, Kiwi';
// slice method
console.log(string.slice(7, 13));
console.log(string.slice(15, 19));
console.log(string.slice(0, 5));
console.log(string.slice(-12, -6));
console.log(string.slice(7));
// substr method
console.log(string.substr(7, 6));
console.log(string.substr(15, 19));

//  replacing string content
let oldText = "My name is Aman";
console.log("initial text is :-" + oldText);
let newText = oldText.replace("Aman", "Raju");
console.log("New text is :-" + newText);