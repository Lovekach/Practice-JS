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

// function nbDig(n, d) {
//     let count = 0;

//     for (let k = 0; k <= n; k++) {

//         const square = k * k;


//         const squareStr = square.toString();


//         for (let i = 0; i < squareStr.length; i++) {

//             const digit = parseInt(squareStr[i]);

//             if (digit === d) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }


// CW part2 7 task

function findMissing(arr1, arr2) {
    const countMap = new Map();


    for (const num of arr1) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }


    for (const num of arr2) {
        const count = countMap.get(num);
        if (count === 1) {
            countMap.delete(num);
        } else {
            countMap.set(num, count - 1);
        }
    }

    for (const [key, value] of countMap) {
        return key;
    }
}




// CW part2 8 task


// function getDecimal(number) {
//     if (typeof number !== 'number') {
//         throw new Error('Invalid input. Please provide a valid number.');
//     }

//     const absoluteNumber = Math.abs(number);

//     const decimalPart = absoluteNumber % 1;

//     return decimalPart;
// }