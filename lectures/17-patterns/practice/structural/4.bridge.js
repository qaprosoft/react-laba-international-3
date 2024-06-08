class Color {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super('dark-black');
  }
}

class SilbrigColor extends Color {
  constructor() {
    super('silbrig-mettalic');
  }
}

class Car {
  constructor(color) {
    this.color = color;
  }
}

class Audi extends Car {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get}`;
  }
}

class Bmw extends Car {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}

const blackBmw = new Bmw(new BlackColor());
console.log(blackBmw.paint());

// we avoided creation very specific class:
// const blackBmw = new BlackColorBmw();
