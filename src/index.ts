import '@s/assets/css/base.css';
import '@s/assets/css/main.scss';
// import Greeter from './test/classDecorotor';
import { createCtx } from './test/createCtx';
import Person from './test/litterGame';
import { setInterval } from 'timers';

// const greeting = new Greeter('caico');
// console.log(greeting.greet());
// console.log(typeof Greeter);

const ctx = createCtx('#canvas', 700, 500);
const img: HTMLImageElement = new Image();
img.src = 'https://yongest.github.io/lib/img/NPCrabbitbaby-2.png';
img.onerror = function (err) {
  console.error(err);
}

img.onload = function () {
  const person = new Person({
    ctx,
    img,
    crosswiseFrame: 4,
    lengthwaysFrame: 4
  });

  setInterval(() => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    person.draw();
  }, 1000 / 60);

  document.addEventListener('keydown', function (e: KeyboardEvent) {
    const code = e.keyCode;
    if (code >= 37 && code <= 40) {
      e.preventDefault();
      person.changeDirection(code);
    }
  })
}
