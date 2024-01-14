function lastKNumbersSequence(n, k) {

    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = Math.max(0, i - k); j < i; j++) {
            sum += arr[j];
        }

        arr.push(sum);
    }

    return arr;
}

lastKNumbersSequence(6, 3);