// Coding Challenge #3

/*
    Rewrite the 'calcAverageHumanAge' function from Challenge #2, 
    but this time as an arrow function, and using chaining!
    
    Test data:
        § Data 1: [5, 2, 4, 1, 15, 8, 3]
        § Data 2: [16, 6, 10, 5, 6, 1, 4]
*/


const calcAverageHumanAge = ages => 
    ages
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((sum, age, i, arr) => sum + age / arr.length, 0);

  // Test với cả hai bộ dữ liệu
    console.log("--- Test Data 1 ---");
    console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
    
    console.log("--- Test Data 2 ---");
    console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));