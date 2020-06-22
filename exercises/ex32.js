//Here's the code with Rabbit extending Animal
//Unfortunately, Rabbit objects can't be created. What's wrong? Fix it.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); //changed this.name=name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.name);
