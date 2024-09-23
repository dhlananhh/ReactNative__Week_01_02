// Coding Challenge #4

/*
Coding Challenge #4
    Your tasks:
        1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
    child class of the 'CarCl' class
        2. Make the 'charge' property private
        3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
    methods of this class, and also update the 'brake' method in the 'CarCl'
    class. Then experiment with chaining!

    Test data:
        § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/


// Car class
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Method to brake the car
    brake() {
        this.speed = Math.max(0, this.speed - 10);
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this; // Enable method chaining
    }

    // Method to get the current speed
    getSpeed() {
        return this.speed;
    }
}

// Electric Car class
class EVCl extends CarCl {
    #charge; // Private property for battery charge

    constructor(make, speed, charge) {
        super(make, speed); // Call the parent constructor
        this.#charge = charge; // Initialize charge
    }

    // Method to charge the battery
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.#charge}%`);
        return this; // Enable method chaining
    }

    // Method to accelerate the EV
    accelerate() {
        this.speed += 20; // Increase speed by 20
        this.#charge = Math.max(0, this.#charge - 1); // Decrease charge by 1%
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this; // Enable method chaining
    }
}

// Create an electric car object
const rivian = new EVCl('Rivian', 120, 23);

// Test the methods with chaining
rivian.accelerate().brake().chargeBattery(90).accelerate();