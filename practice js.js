// CW part2 5 task

// function combine() {
//     let result = {};
//     for (let obj of arguments) {
//         for (let property in obj) {
//             if (property in result) {
//                 result[property] += obj[property];
//             } else {
//                 result[property] = obj[property];
//             }
//         }
//     }
//     return result;
// }


// CW part2 6 task

function nbDig(n, d) {
    let count = 0;

    for (let k = 0; k <= n; k++) {

        const square = k * k;


        const squareStr = square.toString();


        for (let i = 0; i < squareStr.length; i++) {

            const digit = parseInt(squareStr[i]);

            if (digit === d) {
                count++;
            }
        }
    }

    return count;
}