function negativePositiveNumbers(arr) {

    let myArr = [];

    for (let el of arr) {
        if (el < 0) {
            myArr.unshift(el);
        } else {
            myArr.push(el);
        }
    }

    console.log(myArr.join('\n'));

}

negativePositiveNumbers([7, -2, 8, 9]);