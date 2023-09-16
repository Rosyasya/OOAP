interface IVolumeCalculable {
    calculateVolume(): number;
  }
  
  abstract class Shape implements IVolumeCalculable {
    protected name: string;
    protected dimensions: number[];
  
    constructor(name: string, dimensions: number[]) {
      this.name = name;
      this.dimensions = dimensions;
      console.log(`Object created: ${this.name}`);
    }
  
    abstract calculateVolume(): number;
  }
  
  
  class Cube extends Shape {
    constructor(sideLength: number) {
      super('Cube', [sideLength]);
    }
  
    calculateVolume(): number {
      return Math.pow(this.dimensions[0], 3);
    }
  }
  
  class Parallelogram extends Shape {
    constructor(base: number, height: number) {
      super('Parallelogram', [base, height]);
    }
  
    calculateVolume(): number {
      return 0;
    }
  }
  
  class Pyramid extends Shape {
    constructor(baseLength: number, height: number) {
      super('Pyramid', [baseLength, height]);
    }
  
    calculateVolume(): number {
      return (1 / 3) * this.dimensions[0] * this.dimensions[0] * this.dimensions[1];
    }
  }
  
  const cube = new Cube(5);
  console.log(`Cube volume: ${cube.calculateVolume()}`);
  
  const parallelogram = new Parallelogram(8, 4);
  console.log(`Parallelogram volume: ${parallelogram.calculateVolume()}`);
  
  const pyramid = new Pyramid(6, 10);
  console.log(`Pyramid volume: ${pyramid.calculateVolume()}`);
  