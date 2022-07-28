// string Anagram
// 'aman' => 'nama'

// condition
// length check (both string)
// mapping letters

function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    let count = {}
    for (let firstWord of string1) {
        count[firstWord] = (count[firstWord] || 0) + 1
    }

    for (let secondWord of string2) {
        if (!count[secondWord]) {
            return false
        }
        count[secondWord] -= 1;
    }
    return true
}

var check = isAnagram('raju', 'ajur')
console.log(check)

// time complexity 0(n)