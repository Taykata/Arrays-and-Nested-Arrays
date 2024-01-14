function equalNeighbors(matrix) {
    let equalPairs = 0;
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (col + 1 < matrix[0].length && areNeighborsEqual(row, col, row, col + 1)) {
                equalPairs++;
            }
            if (row + 1 < matrix.length && areNeighborsEqual(row, col, row + 1, col)) {
                equalPairs++;
            }
        }
    }
    
    function areNeighborsEqual(row1, col1, row2, col2) {
      return matrix[row1][col1] === matrix[row2][col2];
    }

    console.log(equalPairs);
}

equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]);