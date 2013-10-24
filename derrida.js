// derrida ascii art


function da24() {
  window.document.getElementsByTagName('h1')[0].textContent.split('').forEach(function(x){ window.document.getElementsByTagName('h1')[0].insertAdjacentText("afterEnd",x)})
};

function x(x) {
   for (i=3; i < x; i++) {
      da24();
   };
};
