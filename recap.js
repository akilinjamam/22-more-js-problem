function maxNumber(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > max) {
            max = element
        }
    }
    return max
}

let num = [1, 5, 10, 13, 7, 4, 23, 15, 18, 11];
const maximumNumber = maxNumber(num);

console.log(maximumNumber);