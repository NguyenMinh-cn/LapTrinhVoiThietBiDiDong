class Rectangle{
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
          return this.width*this.height;
      }
  getPerimeter(): number {
          return (this.width+this.height)*2;
      }
}
const r1 = new Rectangle(30,20);
console.log("Area: ", r1.getArea());
console.log("Perimeter: ", r1.getPerimeter());
