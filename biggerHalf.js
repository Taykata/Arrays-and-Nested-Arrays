function biggerHalf(arr) {

    let sortedArr = arr.sort((a, b) => a - b);

    let halfIndex = Math.floor(sortedArr.length / 2);
    let secondHalf = sortedArr.slice(halfIndex);

    return secondHalf;

}

biggerHalf([4, 7, 2, 5]);