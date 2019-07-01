import '@s/assets/css/base.css';
import '@s/assets/css/main.scss';
import Greeter from './test/classDecorotor';

const greeting = new Greeter('caico');
console.log(greeting.greet());
console.log(typeof Greeter);
