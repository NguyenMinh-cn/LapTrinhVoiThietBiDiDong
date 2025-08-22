class Person{
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  display(): void {
          console.log(`Name: ${this.name}, Age: ${this.age}`);
      }
  
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  introduce(): void {
          console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
      }
}
const s1 = new Student("Minh", 21, "U");
s1.introduce();