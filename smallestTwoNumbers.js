function smallestTwoNumbers(arr) {

    let buff = '';

    for (let i = 0; i <= 1; i++) {
        let smallestNum = Math.min(...arr);
        let index = arr.indexOf(smallestNum);
        arr.splice(index, 1);
        buff += `${smallestNum} `;
    }

    console.log(buff);

}

smallestTwoNumbers([30, 15, 50, 5]);