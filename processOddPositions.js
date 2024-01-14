function processOddPositions(arr) {

    let myArr = [];

    for (let i = 1; i < arr.length; i += 2) {
        myArr.push(arr[i] * 2);
    }

    console.log(myArr.reverse().join(' '));

}

processOddPositions([10, 15, 20, 25]);