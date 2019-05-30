console.log("this is other.js");
import './common';

window.onload = function () {
  const button = document.querySelector('#goBack');
  button.addEventListener('click', function() {
    history.back();
  });
};