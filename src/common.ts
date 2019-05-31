const getClassNameSymbol = Symbol();

class C {
  [getClassNameSymbol]() {
    return "C";
  }
}

const c = new C();
const className = c[getClassNameSymbol]();

console.log(className);