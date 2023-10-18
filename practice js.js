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

// function findMissing(arr1, arr2) {
//     const countMap = new Map();


//     for (const num of arr1) {
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//     }


//     for (const num of arr2) {
//         const count = countMap.get(num);
//         if (count === 1) {
//             countMap.delete(num);
//         } else {
//             countMap.set(num, count - 1);
//         }
//     }

//     for (const [key, value] of countMap) {
//         return key;
//     }
// }




// CW part2 8 task


// function getDecimal(number) {
//     if (typeof number !== 'number') {
//         throw new Error('Invalid input. Please provide a valid number.');
//     }

//     const absoluteNumber = Math.abs(number);

//     const decimalPart = absoluteNumber % 1;

//     return decimalPart;
// }


// CW part2 9 task

// function maxTriSum(numbers) {
//     const uniqueArr = Array.from(new Set(numbers));
//     if (uniqueArr.length < 3) {
//         return "Массив должен содержать хотя бы 3 уникальных числа";
//     }
//     uniqueArr.sort((a, b) => b - a);
//     const maxSum = uniqueArr.slice(0, 3).reduce((sum, num) => sum + num, 0);
//     return maxSum;
// }



// CW part2 11 task

// function nicknameGenerator(name) {
//     if (name.length < 4) {
//         return "Error: Name too short";
//     }

//     const thirdLetter = name[2].toLowerCase(); 

//     if ("aeiou".includes(thirdLetter)) {
//         return name.slice(0, 4);
//     } else {
//         return name.slice(0, 3);
//     }
// }


// CW part2 12 task

// function sortMyString(s) {
//     let evenGroup = '';
//     let oddGroup = '';

//     for (let i = 0; i < s.length; i++) {
//       if (i % 2 === 0) {
//         evenGroup += s[i];
//       } else {
//         oddGroup += s[i];
//       }
//     }

//     return evenGroup + ' ' + oddGroup;
//   }


// CW part2 12 task

// function isPowerOfTwo(n){
    
//     if (n <= 0 || n !== Math.floor(n)) {
//       return false;
//     }
  
//     return (n & (n - 1)) === 0;
//   }
