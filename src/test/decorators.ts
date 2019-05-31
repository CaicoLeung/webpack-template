function enumerable (value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  property = 'property';
  greeting: string;
  constructor (m: string) {
    this.greeting = m;
  }

  @enumerable(false)
  greet () {
    return 'Hello' + this.greeting;
  }
}

export default Greeter;
