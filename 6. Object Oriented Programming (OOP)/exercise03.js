// Coding Challenge #3

/* 
Coding Challenge #3
    Your tasks:
        1. Use a constructor function to implement an Electric Car (called 'EV') as a child
    "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
    current battery charge in % ('charge' property)
        2. Implement a 'chargeBattery' method which takes an argument
    'chargeTo' and sets the battery charge to 'chargeTo'
        3. Implement an 'accelerate' method that will increase the car's speed by 20,
    and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
    km/h, with a charge of 22%'
        4. Create an electric car object and experiment with calling 'accelerate',
    'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
    you 'accelerate'! Hint: Review the definiton of polymorphism

    Test data:
        § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/


// Constructor function for the Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

// Method to brake the car
Car.prototype.brake = function() {
    this.speed = Math.max(0, this.speed - 10);
    console.log(`${this.make} going at ${this.speed} km/h`);
};

// Constructor function for the Electric Car (EV)
function EV(make, speed, charge) {
    Car.call(this, make, speed); // Call the parent constructor
    this.charge = charge; // Current battery charge
}

// Inherit from Car
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// Method to charge the battery
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%`);
};

// Method to accelerate the EV
EV.prototype.accelerate = function() {
    this.speed += 20; // Increase speed by 20
    this.charge = Math.max(0, this.charge - 1); // Decrease charge by 1%
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

// Create an electric car object
const tesla = new EV('Tesla', 120, 23);

// Test the methods
tesla.accelerate(); // Accelerate the car
tesla.brake();      // Brake the car
tesla.chargeBattery(90); // Charge the battery to 90%
tesla.accelerate(); // Accelerate again to see the effect of charge