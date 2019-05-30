import '@s/assets/css/index.scss';
import '@s/common';

console.log("第几行");

window.onload = function() {
  const button = document.querySelector('#go');
  button.addEventListener('click', function() {
    import('@s/dynamicData').then(res => {
      console.log(res.default.message);
    }).catch(err => console.error(err));
  });
};