// 50 Javascript Challenges for Beginners - Part 2


// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// 27. Hàm tạo mảng mới với các phần tử duy nhất
console.log('27. Hàm tạo mảng mới với các phần tử duy nhất');
function getDistinctElements(arr) {
    return [...new Set(arr)];
}
console.log(getDistinctElements([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9, 9, 9, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 28. Calculate the sum of first 100 prime numbers and return them in an array
// 28. Tính tổng 100 số nguyên tố đầu tiên và trả về trong một mảng
console.log('28. Tính tổng 100 số nguyên tố đầu tiên và trả về trong một mảng');
function sumFirstNPrimes(n) {
    const primes = [];
    let num = 2;
    let sum = 0;

    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
            sum += num;
        }
        num++;
    }

    return [sum, primes];
}

const [sum, primes] = sumFirstNPrimes(100);
console.log(`Sum of first 100 primes: ${sum}`);
console.log(`First 100 primes: ${primes}`);
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 29. Print the distance between the first 100 prime numbers
// 29. In khoảng cách giữa 100 số nguyên tố đầu tiên
console.log('29. In khoảng cách giữa 100 số nguyên tố đầu tiên');
function distanceBetweenPrimes(n) {
    const primes = [];
    let num = 2;

    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    for (let i = 1; i < primes.length; i++) {
        console.log(`Distance between ${primes[i - 1]} and ${primes[i]}: ${primes[i] - primes[i - 1]}`);
    }
}
distanceBetweenPrimes(100);
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 30. Create a function that will add two positive numbers of indefinite size. 
// The numbers are received as strings and the result should be also provided as string.
// 30. Hàm cộng hai số dương có độ dài không xác định
console.log('30. Hàm cộng hai số dương có độ dài không xác định');
function addLargeNumbers(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result;
}
console.log(addLargeNumbers('123456789', '987654321')); // 1111111110
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 31. Create a function that will return the number of words in a text
// 31. Hàm đếm số từ trong văn bản
console.log('31. Hàm đếm số từ trong văn bản');
function countWords(text) {
    return text.trim().split(/\s+/).length;
}
console.log("Count the number of words 'I am a programmer'");
console.log(countWords('I am a programmer')); // 4
console.log("Count the number of words 'I love programming'");
console.log(countWords('I love programming')); // 3
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 32. Create a function that will capitalize the first letter of each word in a text
// 32. Hàm viết hoa chữ cái đầu tiên của mỗi từ trong văn bản
console.log('32. Hàm viết hoa chữ cái đầu tiên của mỗi từ trong văn bản');
function capitalizeWords(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}
console.log("Capitalize the first letter of each word in 'duong hoang lan anh'");
console.log(capitalizeWords('duong hoang lan anh')); // Duong Hoang Lan Anh
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 33. Calculate the sum of numbers received in a comma delimited string
// 33. Tính tổng các số trong chuỗi phân cách bằng dấu phẩy
console.log('33. Tính tổng các số trong chuỗi phân cách bằng dấu phẩy');
function sumFromString(str) {
    return str.split(',').reduce((sum, num) => sum + parseFloat(num), 0);
}
console.log("Sum of numbers in '1, 2, 3, 4, 5'");
console.log(sumFromString('1, 2, 3, 4, 5')); // 15
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 34. Create a function that returns an array with words inside a text.
// 34. Hàm trả về mảng chứa các từ trong văn bản
console.log('34. Hàm trả về mảng chứa các từ trong văn bản');
function getWords(text) {
    return text.match(/\b\w+\b/g) || [];
}
console.log("Get words in 'I am a programmer'");
console.log(getWords('I am a programmer')); // ['I', 'am', 'a', 'programmer']
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 35. Create a function to convert a CSV text to a “bi-dimensional” array
// 35. Chuyển đổi văn bản CSV thành mảng hai chiều
console.log('35. Chuyển đổi văn bản CSV thành mảng hai chiều');
function csvToArray(csv) {
    return csv.split('\n').map(row => row.split(','));
}
console.log("Convert CSV text to a 'bi-dimensional' array");
console.log(csvToArray('a,b,c\nd,e,f\ng,h,i')); // [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 36. Create a function that converts a string to an array of characters
// 36. Chuyển đổi chuỗi thành mảng ký tự
console.log('36. Chuyển đổi chuỗi thành mảng ký tự');
function stringToCharArray(str) {
    return [...str];
}
console.log("Convert string to an array of characters 'hello'");
console.log(stringToCharArray('hello')); // ['h', 'e', 'l', 'l', 'o']
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
// 37. Chuyển đổi chuỗi thành mảng mã ASCII
console.log('37. Chuyển đổi chuỗi thành mảng mã ASCII');
function stringToAsciiArray(str) {
    return str.split('').map(char => char.charCodeAt(0));
}
console.log("Convert string to an array of ASCII codes 'hello'");
console.log(stringToAsciiArray('hello')); // [104, 101, 108, 108, 111]
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 38. Create a function that will convert an array containing ASCII codes in a string
// 38. Chuyển đổi mảng mã ASCII thành chuỗi
console.log('38. Chuyển đổi mảng mã ASCII thành chuỗi');
function asciiArrayToString(arr) {
    return String.fromCharCode(...arr);
}
console.log("Convert an array of ASCII codes to a string [104, 101, 108, 108, 111]");
console.log(asciiArrayToString([104, 101, 108, 108, 111])); // hello
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');

// 39. Implement the Caesar cypher
// 39. Triển khai mã hóa Caesar
console.log('39. Triển khai mã hóa Caesar');
function caesarCipher(str, shift) {
    return str.replace(/[a-z]/gi, char => {
        const code = char.charCodeAt(0);
        const isUpperCase = char === char.toUpperCase();
        const base = isUpperCase ? 65 : 97;
        return String.fromCharCode((code - base + shift) % 26 + base);
    });
}
console.log("Caesar cipher 'hello' with shift 3");
console.log(caesarCipher('hello', 3)); // khoor
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 40. Implement the bubble sort algorithm for an array of numbers
// 40. Triển khai thuật toán sắp xếp nổi bọt
console.log('40. Triển khai thuật toán sắp xếp nổi bọt');
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log("Bubble sort [5, 3, 8, 2, 1, 4]");
console.log(bubbleSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
// 41. Tính khoảng cách giữa hai điểm x và y cho trước
console.log('41. Tính khoảng cách giữa hai điểm x và y cho trước');
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log("Distance between (1, 1) and (4, 5)");
console.log(distance(1, 1, 4, 5)); // 5
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 42. Create a function that will return a Boolean value 
    // indicating if two circles defined by center coordinates and radius are intersecting
// 42. Kiểm tra hai hình tròn có giao nhau không
console.log('42. Kiểm tra hai hình tròn có giao nhau không');
function circlesIntersect(x1, y1, r1, x2, y2, r2) {
    const distanceBetweenCenters = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distanceBetweenCenters <= r1 + r2;
}
console.log("Check if two circles intersect (1, 1, 1) and (4, 5, 1)");
console.log(circlesIntersect(1, 1, 1, 4, 5, 1)); // false
console.log("Check if two circles intersect (1, 1, 2) and (2, 2, 2)");
console.log(circlesIntersect(1, 1, 2, 2, 2, 2)); 
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 43. Create a function that will receive a bi-dimensional array as argument 
    // and a number and will extract as a unidimensional array 
    // the column specified by the number
// 43. Trích xuất một cột từ mảng hai chiều
console.log('43. Trích xuất một cột từ mảng hai chiều');
function extractColumn(arr, columnIndex) {
    return arr.map(row => row[columnIndex]);
}
console.log("Extract column 1 from [[1, 2, 3], [4, 5, 6], [7, 8, 9]]");
console.log(extractColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)); // [2, 5, 8]
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 44. Create a function that will convert a string containing a binary number into a number
// 44. Chuyển đổi chuỗi nhị phân thành số
console.log('44. Chuyển đổi chuỗi nhị phân thành số');
function binaryToNumber(binary) {
    return parseInt(binary, 2);
}
console.log("Convert binary string '1010' to number");
console.log(binaryToNumber('1010')); // 10
console.log("Convert binary string '1101' to number");
console.log(binaryToNumber('1101')); // 13
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 45. Create a function to calculate the sum of all the numbers in a jagged array
    // (contains numbers or other arrays of numbers on an unlimited number of levels)
// 45. Tính tổng các số trong mảng đa chiều
console.log('45. Tính tổng các số trong mảng đa chiều');
function sumJaggedArray(arr) {
    return arr.reduce((sum, item) => {
        if (Array.isArray(item)) {
            return sum + sumJaggedArray(item);
        }
        return sum + (typeof item === 'number' ? item : 0);
    }, 0);
}
console.log("Sum of numbers in jagged array [1, [2, [3, 4], 5], 6]");
console.log(sumJaggedArray([1, [2, [3, 4], 5], 6])); // 21
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 46. Find the maximum number in a jagged array of numbers or array of numbers
// 46. Tìm số lớn nhất trong mảng đa chiều
console.log('46. Tìm số lớn nhất trong mảng đa chiều');
function maxInJaggedArray(arr) {
    return arr.reduce((max, item) => {
        if (Array.isArray(item)) {
            return Math.max(max, maxInJaggedArray(item));
        }
        return Math.max(max, typeof item === 'number' ? item : -Infinity);
    }, -Infinity);
}
console.log("Maximum number in jagged array [1, [2, [3, 4], 5], 6]");
console.log(maxInJaggedArray([1, [2, [3, 4], 5], 6])); // 6
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 47. Deep copy a jagged array with numbers or other arrays in a new array
// 47. Sao chép mảng đa chiều
console.log('47. Sao chép mảng đa chiều');
function deepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
}
console.log("Deep copy jagged array [1, [2, [3, 4], 5], 6]");
const arr = [1, [2, [3, 4], 5], 6];
const copy = deepCopy(arr);
console.log(copy); // [1, [2, [3, 4], 5], 6]
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');


// 48. Create a function to return the longest word in a string
// 48. Tìm từ dài nhất trong chuỗi
console.log('48. Tìm từ dài nhất trong chuỗi');
function longestWord(str) {
    return str.split(/\s+/).reduce((longest, word) => 
        word.length > longest.length ? word : longest
    , '');
}
console.log("Longest word in 'I am a programmer'");
console.log(longestWord('I am a programmer')); // programmer
console.log('\n-*--*--*--*--*--*--*--*--*--*--*--*-');



// 49. Shuffle an array of strings
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.
// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
// 52. Calculate Fibonacci(500) with high precision (all digits)
// 53. Calculate 70! with high precision (all digits)
