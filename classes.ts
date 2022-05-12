// There are three access specifiers------------------------->
// Private, Public and Protected

// Concept of private and public------------------------------->
class Person {
  private name: string;
  public constructor(name: string = "default") {
    this.name = name;
  }
  public getName() {
    return this.name;
  }
}

let p = new Person("skillf");
console.log(p.getName());

// Use variable as a parameter----------------------------->
class PersonName {
  public constructor(private name: string) {}
  public getName() {
    return this.name;
  }
}

let pe = new PersonName("skillf");
console.log(pe.getName());

// Use of readonly------------------------------->
class PName {
  private readonly name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public getName() {
    return this.name;
  }
}
let per = new PName("jay");
console.log(per.getName());

// Inheritance:Implements------------------------------>
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// Inheritance:Extends and override------------------------------>
interface Shape {
  getArea: () => number;
}

class Rect implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}
class Square extends Rect {
  public constructor(width: number) {
    super(width, width);
  }

  // Override function
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

// Use of abstract class------------------------------->
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rec extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
