// Coding Challenge #1


/*
    Mark and John are trying to compare their BMI (Body Mass Index), 
    which is calculated using the formula: 
        BMI = mass / height ** 2 
            = mass / (height * height) 
        (mass in kg and height in meter).

    Your tasks:
        1. Store Mark's and John's mass and height in variables
        2. Calculate both their BMIs using the formula (you can even implement both versions)
        3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

    Test data:
        § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
        § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/


// Hàm tính BMI
function calculateBMI(mass, height) {
    return mass / (height ** 2);
}

// Data #1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// Data #2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Tính BMI cho cả hai bộ dữ liệu
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Tạo biến Boolean markHigherBMI
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

// In kết quả
// Dữ liệu 1
console.log("Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);

// So sánh và in ra kết quả với dữ liệu 1
if (markHigherBMI1 == true) {
    console.log("Mark has a higher BMI than John.");
} else {
    console.log("John has a higher BMI than Mark.");
}

// Dữ liệu 2
console.log("\nDữ liệu 2:");
console.log(`BMI của Mark: ${markBMI2.toFixed(2)}`);
console.log(`BMI của John: ${johnBMI2.toFixed(2)}`);

// So sánh và in ra kết quả với dữ liệu 2
if (markHigherBMI2 == true) {
    console.log("Mark has a higher BMI than John.");
} else {
    console.log("John has a higher BMI than Mark.");
}