function pieceOfPie(arr, firstFlavor, lastFlavor) {

    let ingredients = arr.shift();
    let myArr = [];
    let isStarted = false;

    while (ingredients !== lastFlavor) {

        if (ingredients === firstFlavor || isStarted) {
            isStarted = true;
            myArr.push(ingredients);
        }

        ingredients = arr.shift();

    }

    myArr.push(lastFlavor);

    return myArr;

}

pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
    'Key Lime Pie', 'Lemon Meringue Pie');