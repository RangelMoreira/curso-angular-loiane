var minhaVar = 'minha variavel';

function minnhaFunc(x, y){
  return x+y;
}

//ES6 ou ES 2015
let num =2;
const PI = 3.14;

//map
var numeros = [1,2,3];
numeros.map(function(valor){
  return valor * 2;
});

//ES 2015
numeros.map(valor => valor * 2);

class Matematica {
  soma (x,y){
    return x+y;
  }
}