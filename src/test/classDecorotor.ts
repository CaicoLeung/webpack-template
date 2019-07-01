function sealed (constructor: Function) {
  Object.seal(constructor);
}

@sealed
class Greeter {
  greeting: string;

  constructor (message: string) {
    this.greeting = message;
  }

  greet () {
    return 'Hello' + this.greeting;
  }
}

export default Greeter;
