class Animal {
  constructor(name, age, image, sound) {
    this.name = name;
    this.age = age;
	this.image = image;
	this.sound = sound;
  }
  
  
  eats()
  {
	  return this.name + " eats food";
  }
}

class Cat extends Animal {
	constructor(name, age, image, sound, owner) {
    super(name, age, image, sound);
    this.owner = owner;
  }
  
  eats()
  {
	  return this.name + " eats mouse";
  }
  
  Animalsound()
  {
	  return this.name + " sounds is meow";
  }  
}

class Dog extends Animal {
	constructor(name, age, image, sound, owner) {
    super(name, age, image, sound);
    this.owner = owner;
  }
  
  eats()
  {
	  return this.name + " eats chicken";
  }
  
  Animalsound()
  {
	  return this.name + " sounds is woof";
  }  
}


class Fish extends Animal {
	constructor(name, age, image, sound, color) {
    super(name, age, image, sound);
    this.color = color;
  }
  
  eats()
  {
	  return this.name + " eats flakes";
  }
  
}

let dog = new Dog("Dog", 5, "images/dog.jpg", "woof", "me");
var cat = new Cat("Cat", 4, "images/cat.jpg", "meow", "me");
var fish = new Fish("Fish", 6, "images/fish.jpg", "sound", "gold");

