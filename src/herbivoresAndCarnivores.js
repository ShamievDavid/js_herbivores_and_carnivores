'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victum) {
    if (victum.hidden || victum instanceof Carnivore) {
      return;
    }

    victum.health -= 50;
    Animal.alive = Animal.alive.filter(animal => animal.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
