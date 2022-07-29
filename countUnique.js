function countUnigue(array) {
    console.log(array.length)
    if (array.length) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
                console.log(array[i])
            }
        }
        return i + 1;
    } else {
        throw new console.error("array is empty");
    }
}
var result = countUnigue([10,10,10,11,12,13,14,14,14])
console.log(`results is ${result}`)