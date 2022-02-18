// the numbers from 1 to 50 which is divisable by 3 and 5

for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foo bar')
    }
    if (i % 3 == 0)
        console.log('foo');

    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }

}

