{
  class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    public getInfo() {
      return console.log(`Model: ${this.make}, Year: ${this.year}`);
    }
  }
  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    public getModel() {
      return console.log(`Model: ${this.model}`);
    }
  }
}
