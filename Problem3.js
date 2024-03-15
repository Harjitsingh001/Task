

// let grid = [];
// let number = 1
// for (let i = 0; i < 5; i++) {
//     let col = [];
//     for (let j = 0; j < 5; j++) {
//         col.push(number);
//     }
//     number++
//     grid.push(col);
// }
// console.log(grid)


// let grid = [
//     [17, 42, 59, 80, 12],
//     [95, 23, 68, 37, 51],
//     [88, 5, 74, 30, 63],
//     [20, 96, 10,10 , 33],
//     [58, 84, 71, 27, 16]]

    let grid=[
        [1,1,1,1,1],
        [1,1,9,1,1],
        [1,1,2,1,1],
        [1,1,1,1,1],

    ]

let maxProduct = 0;
let  Position;
let alterMaxPrev = 0;


for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
        if (
            grid[i - 1][j] === undefined ||
            grid[i - 1][j + 1] === undefined ||
            grid[i][j + 1] === undefined ||
            grid[i + 1][j + 1] === undefined ||
            grid[i + 1][j] === undefined ||
            grid[i + 1][j - 1] === undefined ||
            grid[i][j - 1] === undefined ||
            grid[i - 1][j - 1] === undefined
        ) {
            if (grid[i - 1][j] === undefined) grid[i - 1][j] = 1;
            if (grid[i - 1][j + 1] === undefined) grid[i - 1][j + 1] = 1;
            if (grid[i][j + 1] === undefined) grid[i][j + 1] = 1;
            if (grid[i + 1][j + 1] === undefined) grid[i + 1][j + 1] = 1;
            if (grid[i + 1][j] === undefined) grid[i + 1][j] = 1;
            if (grid[i + 1][j - 1] === undefined) grid[i + 1][j - 1] = 1;
            if (grid[i][j - 1] === undefined) grid[i][j - 1] = 1;
            if (grid[i - 1][j - 1] === undefined) grid[i - 1][j - 1] = 1;
        }
        3


        // const alternative = grid[i][j] * grid[i + 1][j] * grid[i][j + 1] * grid[i + 1][j + 1] * grid[i - 1][j - 1] * grid[i][j - 1] * grid[i + 1][j - 1] * grid[i - 1][j] * grid[i - 1][j + 1];
        const alternative = grid[i][j] * grid[i - 1][j] * grid[i][j + 1] * grid[i + 1][j] * grid[i][j - 1];

        const diagonallyEle = grid[i][j] * grid[i - 1][j - 1] * grid[i - 1][j + 1] * grid[i + 1][j + 1] * grid[i + 1][j - 1];

        if (alternative > diagonallyEle) {
            maxProduct = alternative;
          

            if(alterMaxPrev < maxProduct){
                alterMaxPrev=maxProduct;

                Position=`Row:${i+1}, Col:${j+1}`;
            }
          
            
        }
        else {
            maxProduct=diagonallyEle;
           


            if(alterMaxPrev < maxProduct){
                alterMaxPrev=maxProduct;
                Position=`Row:${i+1}, Col:${j+1}`;
            }    

        }


        // console.log(`Alternative at (${i}, ${j}): ${alternative}`);
        // console.log(`Maximum product at (${i}, ${j}): ${maxProduct} `);
    }


}

document.write(`Maximum product is : ${alterMaxPrev} at position ${Position}`)

