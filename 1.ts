{
  function formatString(input: string, toUpper?: boolean): string {
    const useUpper = toUpper !== false;
    return useUpper ? input.toUpperCase() : input.toLowerCase();
  }
}

{
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }
}
{
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return [].concat(...arrays);
  }
}
{
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
}
{
  function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
  }
}

{
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    return products.reduce((max, product) => {
      return product.price > max.price ? product : max;
    });
  }
}
{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Sunday || day === Day.Saturday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
}
{
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
}
