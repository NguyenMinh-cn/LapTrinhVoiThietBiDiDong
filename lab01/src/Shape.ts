abstract class Shape {
    // Phương thức trừu tượng
    abstract area(): number;
}

class Square extends Shape {
    private side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    // implement
    area(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const square = new Square(5);
console.log('Diện tích hình vuông:', square.area());

const circle = new Circle(3);
console.log('Diện tích hình tròn:', circle.area());
