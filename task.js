// making double element as single element with for of loop

const numbers = [10, 12, 22, 25, 12, 18, 36, 40, 36];

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

const dublictes = removeDuplicate(numbers);

console.log(dublictes);