/* 
You are tasked with creating a hierarchy of shapes using object prototypes and inheritance in JavaScript. Implement various classes for different shapes, each with specific properties and methods.

Create a constructor function Shape with properties color and filled. Include a method displayInfo that displays information about the shape.

Create a constructor function Circle that extends Shape. Add a property for radius and implement a method calculateArea that calculates and returns the area of the circle.

Create a constructor function Rectangle that extends Shape. Add properties for width and height. Implement a method calculateArea that calculates and returns the area of the rectangle.

Create a constructor function Triangle that extends Shape. Add properties for base and height. Implement a method calculateArea that calculates and returns the area of the triangle.
*/

// Solution
// Shape constructor
function Shape(color, filled) {
    this.color = color;
    this.filled = filled;
  }
  
  // Method to display information about the shape
  Shape.prototype.displayInfo = function () {
    console.log(`Color: ${this.color}, Filled: ${this.filled}`);
  };
  
  // Circle constructor
  function Circle(color, filled, radius) {
    Shape.call(this, color, filled);
    this.radius = radius;
  }
  
  // Inheritance from Shape
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  
  // Method to calculate the area of the circle
  Circle.prototype.calculateArea = function () {
    return Math.PI * this.radius ** 2;
  };
  
  // Rectangle constructor
  function Rectangle(color, filled, width, height) {
    Shape.call(this, color, filled);
    this.width = width;
    this.height = height;
  }
  
  // Inheritance from Shape
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  // Method to calculate the area of the rectangle
  Rectangle.prototype.calculateArea = function () {
    return this.width * this.height;
  };
  
  // Triangle constructor
  function Triangle(color, filled, base, height) {
    Shape.call(this, color, filled);
    this.base = base;
    this.height = height;
  }
  
  // Inheritance from Shape
  Triangle.prototype = Object.create(Shape.prototype);
  Triangle.prototype.constructor = Triangle;
  
  // Method to calculate the area of the triangle
  Triangle.prototype.calculateArea = function () {
    return 0.5 * this.base * this.height;
  };
  
  // Example usage
  const circle = new Circle("Red", true, 5);
  const rectangle = new Rectangle("Blue", false, 4, 6);
  const triangle = new Triangle("Green", true, 3, 8);
  
  circle.displayInfo();
  console.log("Circle Area:", circle.calculateArea());
  
  rectangle.displayInfo();
  console.log("Rectangle Area:", rectangle.calculateArea());
  
  triangle.displayInfo();
  console.log("Triangle Area:", triangle.calculateArea());
  
