class Car{
  brand: string;
  model: string;
  year: number;

  constructor(brand: string,model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  display(): void {
          console.log(`Car: ${this.brand}, model: ${this.model}, year: ${this.year}`);
      }
}
const car1 = new Car("Toyota", "Car123", 2025);
car1.display();
