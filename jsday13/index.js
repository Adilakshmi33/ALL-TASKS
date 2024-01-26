// static methods
// if we don't want to depend on our object,we want to depend on our class using static method
// Because static method depend on only class not an object
class Employee {
    normalmethod(){
        console.log("normal method");
    }
    static staticmethod(){
        console.log("static method");
    }
}
const Obj =new Employee();
// normalmethod depends on object
Obj.normalmethod();  
// staticmethod depends on class
Employee.staticmethod();


// we can't add a normal method into a static method
// we can add a static method into a normal method
class Employee {
    static staticmethod(){
        console.log("static method");
    }
    normalmethod(){
        console.log("normal method");
        // its work
        Employee.staticmethod(); 
        // can't work
        this.normalmethod();
    }
}
const Obj =new Employee();
Obj.normalmethod();  


// inheritance
// In JavaScript, inheritance allows a class to inherit properties and methods from another class, enabling code reuse.
class Animal {
    constructor(name) {
      this.name = name;
    }
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} is barking.`);
    }
  }
  const myDog = new Dog('Buddy');
  myDog.eat(); 
  myDog.bark();

  
//Polymorphism
//  Polymorphism in JavaScript refers to the ability of objects to take on multiple forms, allowing a single interface to represent various types and behaviors.
// Two types of polymorphisms
// 1.compiletime-->overloading
// 2.runtime polymorphism-->overriding
// js doesn't support overloading
// Same function name but different parameters
function abc(){
    console.log("no parameter");
}
function abc(one){
    console.log("with one parameter");
}
function abc(one,two){
    console.log("with two parameter");
}
abc();
// output-->with two parameter (because it will take the latest one

// Abstraction
// It hide the internal details and show the functionality
// Abstraction through a function
function calculateSquareArea(side) {
    return side * side;
  }
  const squareArea = calculateSquareArea(5);
  console.log("Square Area:", squareArea);
  

