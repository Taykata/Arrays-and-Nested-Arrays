function biggestElement(bigArr) {

    let myArr = [];

    for (let i = 0; i < bigArr.length; i++) {
        myArr.push(Math.max(...bigArr[i]));
    }

    console.log(Math.max(...myArr));

}

biggestElement([[20, 50, 10],
    [8, 33, 145]]);