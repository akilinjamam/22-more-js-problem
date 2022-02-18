
// making double element as single element with for of loop

const names = ['abul', 'kabul', 'dabul', 'shabul', 'rabul', 'dabul', 'nabul', 'shabul', 'tabul', 'rabul'];

function removeDuplicate(names) {
    const unique = [];

    for (const element of names) {
        // console.log(names);

        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique
}

const dublictes = removeDuplicate(names);

console.log(dublictes);