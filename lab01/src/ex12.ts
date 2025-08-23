// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  fly(): void {
    console.log("The bird is flying");
  }
}

class Fish implements Swimmable {
  swim(): void {
    console.log("The fish is swimming");
  }
}

const bird = new Bird();
const fish = new Fish();

bird.fly();   
fish.swim();  
