function hashStringToInt(argu, tableSize) {
    let hash = 19;
    for (let i = 0; i < argu.length; i++) {
        hash = (19 * hash * argu.charCodeAt(i)) % tableSize
        console.log("value of hash is " + hash);
    }
    console.log("final value of hash is " + hash)
    return hash;
}

class HashTable {
    table = new Array(1);
    numItem = 0;
    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(
            item => {
                if (item) {
                    item.forEach(([key, value]) => {
                        const index = hashStringToInt(key, newTable.length);
                        console.log("resize index value is " + index);
                        if (newTable[index]) {
                            newTable[index].push([key, value])
                            console.log("In resize ,if condintion is running " + newTable[index].push([key, value]))
                        } else {
                            newTable[index] = [
                                [key, value]
                            ]
                            console.log("In resize, else condition is running " + newTable[index])
                        }
                    })
                }
            }
        )
        this.table = newTable;
    }
    setItem(key, value) {
        this.numItem++;
        const loadFactor = this.numItem / this.table.length
        console.log("value of loadFactor is " + loadFactor)
        if (loadFactor > .8) {
            this.resize();
        }
        console.log("adding item number is " + this.numItem)
        const index = hashStringToInt(key, this.table.length);
        if (this.table[index]) {
            this.table[index].push([key, value])
            console.log("In setItem ,if condintion is running " + this.table[index].push([key, value]))
        } else {
            this.table[index] = [
                [key, value]
            ]
            console.log("In setItem, else condition is running " + this.table[index])
        }
    };

    getItem(key) {
        const index = hashStringToInt(key, this.table.length);
        if (!this.table[index]) {
            return null
        }
        console.log("In getItem value is " + this.table[index].find(x =>
            x[0] === key)[1])
        return this.table[index].find(x =>
            x[0] === key)[1];
    };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'Aman');
myTable.setItem('lastName', 'Pandey');
myTable.setItem('Age', '24');
myTable.setItem('work', 'Programmer');
myTable.getItem('firstName');
myTable.getItem('lastName');
myTable.getItem('Age');
myTable.getItem('work');

console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('Age'));
console.log(myTable.getItem('work'));
console.log(myTable.table);