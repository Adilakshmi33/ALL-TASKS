// create 5 separate classes(employee, person, car, remote, computer)
// Employee class
class Employee {
  constructor(name, employeeId) {
    this.name = name;
    this.employeeId = employeeId;
  }
  displayInfo() {
    console.log(`Employee: ${this.name}, Employee ID: ${this.employeeId}`);
  }
}

// Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayInfo() {
    console.log(`Person: ${this.name}, Age: ${this.age}`);
  }
}

// Car class
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(`Car: ${this.year} ${this.make} ${this.model}`);
  }
}

// Remote class
class Remote {
  constructor(brand) {
    this.brand = brand;
  }
  pressButton() {
    console.log(`Remote for ${this.brand} TV: Button pressed`);
  }
}

// Computer class
class Computer {
  constructor(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
  }
  displayInfo() {
    console.log(`Computer: ${this.manufacturer} ${this.model}`);
  }
}
const employee1 = new Employee("Adilakshmi", "402");
employee1.displayInfo();

const person1 = new Person("Adilakshmi", 21);
person1.displayInfo();

const car1 = new Car("Toyota", "Camry", 2022);
car1.displayInfo();

const remote1 = new Remote("Samsung");
remote1.pressButton();

const computer1 = new Computer("Dell", "Inspiron");
computer1.displayInfo();
