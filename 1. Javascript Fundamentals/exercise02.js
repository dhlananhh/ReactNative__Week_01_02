// Coding Challenge #2


/*
    Use the BMI example from Challenge #1, 
    and the code you already wrote, and improve it.

    Your tasks:
        1. Print a nice output to the console, saying who has the higher BMI. The message
        is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
        2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
        BMI (28.3) is higher than John's (23.9)!"

    Test data:
        § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
        § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/


// Hàm tính BMI
function calculateBMI(mass, height) {
    return mass / (height ** 2);
}

// Hàm so sánh và in kết quả
function compareBMI(markMass, markHeight, johnMass, johnHeight) {
    const markBMI = calculateBMI(markMass, markHeight);
    const johnBMI = calculateBMI(johnMass, johnHeight);
    
    if (markBMI > johnBMI) {
        console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
    } else if (johnBMI > markBMI) {
        console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    } else {
        console.log(`Mark's BMI (${markBMI.toFixed(1)}) is equal to John's (${johnBMI.toFixed(1)})!`);
    }
}

// Dữ liệu 1
console.log("Test Data 1:");
compareBMI(78, 1.69, 92, 1.95);

// Dữ liệu 2
console.log("\nTest Data 2:");
compareBMI(95, 1.88, 85, 1.76);