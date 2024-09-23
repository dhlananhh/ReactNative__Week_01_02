// Coding Challenge #2

/*
    Your tasks:
        1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
        2. Add a getter called 'speedUS' which returns the current speed in mi/h 
        (divide by 1.6)
        3. Add a setter called 'speedUS' which sets the current speed in mi/h 
        (but converts it to km/h before storing the value, by multiplying the input by 1.6)
        4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

    Test data:
        § Data car 1: 'Ford' going at 120 km/h
*/


// 1. Create the CarCl class
class CarCl {
    constructor(make, speed) {
        this.make = make; // The make of the car
        this.speed = speed; // The current speed of the car in km/h
    }

    // 2. Getter for speed in mi/h
    get speedUS() {
        return this.speed / 1.6; // Convert km/h to mi/h
    }

    // 3. Setter for speed in mi/h
    set speedUS(speedInMi) {
        this.speed = speedInMi * 1.6; // Convert mi/h to km/h
    }

    // Method to accelerate the car
    accelerate() {
        this.speed += 10; // Increase speed by 10
        console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
    }

    // Method to brake the car
    brake() {
        this.speed -= 5; // Decrease speed by 5
        console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
    }
}

// 4. Create a new car
const car1 = new CarCl('Ford', 120);

// Experiment with accelerate and brake methods
car1.accelerate(); // Ford is going at 130 km/h
car1.brake();      // Ford is going at 125 km/h

// Experiment with getter and setter
console.log(`Current speed in mi/h: ${car1.speedUS}`); // Current speed in mi/h
car1.speedUS = 60; // Set speed using mi/h
console.log(`New speed in km/h: ${car1.speed}`); // New speed in km/h