
// making double element as single element with for loop

const names = ['abul', 'kabul', 'dabul', 'shabul', 'rabul', 'dabul', 'nabul', 'shabul', 'tabul', 'rabul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element)

        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique
}

const dublictes = removeDuplicate(names);

console.log(dublictes);