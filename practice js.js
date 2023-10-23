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


// CW part2 13 task

// function isPowerOfTwo(n){

//     if (n <= 0 || n !== Math.floor(n)) {
//       return false;
//     }

//     return (n & (n - 1)) === 0;
//   }



// CW part2 13 task

// function sentence(List) {
//     const sortedValues = [];
  
    
//     let minKey = 999;
//     let maxKey = -999;
//     for (const dict of List) {
//       for (const key in dict) {
//         const intKey = parseInt(key);
//         if (!isNaN(intKey)) {
//           minKey = Math.min(minKey, intKey);
//           maxKey = Math.max(maxKey, intKey);
//         }
//       }
//     }
  
   
//     for (let i = minKey; i <= maxKey; i++) {
//       const key = i.toString();
//       for (const dict of List) {
//         if (dict[key]) {
//           sortedValues.push(dict[key]);
//           break;
//         }
//       }
//     }
  
    
//     const result = sortedValues.join(' ');
  
//     return result;
//   }




// CW part2 15 task

// function minSum(arr) {

//     arr.sort((a, b) => a - b);
    
//     let result = 0;
//     const n = arr.length;
    
    
//     for (let i = 0; i < n / 2; i++) {
//       result += arr[i] * arr[n - i - 1];
//     }
    
//     return result;
//   }


// CW part2 16 task

// function spread(func, args) {
//     return func(...args);
//   }
  
//   // Example usage:
//   function someFunction(a, b, c, d) {
//     return `${a} | ${b} | ${c} | ${d}`;
//   }

// CW part2 17 task

// function vowelOne(inputString) {
//     const vowels = "aeiouAEIOU"; // List of vowel characters
//     let result = "";
  
//     for (let i = 0; i < inputString.length; i++) {
//       const currentChar = inputString[i];
  
//       if (vowels.includes(currentChar)) {
//         result += "1"; 
//       } else {
//         result += "0"; 
//       }
//     }
  
//     return result;
//   }

// CW part2 18 task

// function killer(suspectInfo, dead) {
//     const possible_killers = [];

//     for (const suspect in suspectInfo) {
//         const seen_people = suspectInfo[suspect];
//         if (dead.every(person => seen_people.includes(person))) {
//             possible_killers.push(suspect);
//         }
//     }

//     if (possible_killers.length === 1) {
//         return possible_killers[0];
//     } else {
//         return "No single killer found.";
//     }
// }

// CW part2 19 task

// function dataReverse(data) {
//     const segmentSize = 8; 
//     const reversedData = [];

//     for (let i = data.length - segmentSize; i >= 0; i -= segmentSize) {
//         const segment = data.slice(i, i + segmentSize);
//         reversedData.push(...segment);
//     }

//     return reversedData;
// }