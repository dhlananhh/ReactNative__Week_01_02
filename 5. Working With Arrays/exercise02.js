// Coding Challenge #2


/*
    Let's go back to Julia and Kate's study about dogs. 
    This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

    Your tasks:
    Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
    ages ('ages'), and does the following things in order:
        1. Calculate the dog age in human years using the following formula: if the dog is
    <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
        humanAge = 16 + dogAge * 4
        2. Exclude all dogs that are less than 18 human years old (which is the same as
    keeping dogs that are at least 18 years old)
        3. Calculate the average human age of all adult dogs (you should already know
    from other challenges how we calculate averages 😉)
        4. Run the function for both test datasets

    Test data:
        § Data 1: [5, 2, 4, 1, 15, 8, 3]
        § Data 2: [16, 6, 10, 5, 6, 1, 4]
*/


// Tạo hàm 'calcAverageHumanAge'
function calcAverageHumanAge(ages) {
    // 1. Tính tuổi chó theo tuổi người
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);

    // 2. Loại bỏ những chó có tuổi người dưới 18
    const adultDogs = humanAges.filter(age => age >= 18);

    // 3. Tính trung bình tuổi người của tất cả chó trưởng thành
    const averageHumanAge = adultDogs.reduce((sum, age) => sum + age, 0) / adultDogs.length;

    return averageHumanAge;
}


// 4. Chạy hàm với cả hai bộ dữ liệu test
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

console.log("Tuổi trung bình của chó (theo năm người) cho Data 1:", calcAverageHumanAge(testData1));
console.log("Tuổi trung bình của chó (theo năm người) cho Data 2:", calcAverageHumanAge(testData2));