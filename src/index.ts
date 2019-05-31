import '@s/assets/css/index.scss';
import '@s/common';

window.onload = function() {
  const button: Element = document.querySelector('#go');
  button.addEventListener('click', function() {
    import('@s/dynamicData').then(res => {
      console.log(res.default.message);
    }).catch(err => console.error(err));
  });
};

function caico() {
  var a = 12;
  return function() {
    console.log(a);
  }
}

caico()();