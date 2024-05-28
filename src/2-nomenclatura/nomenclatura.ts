/*
function f(x, y, z) {
    let a = x + y;
    let b = a * z;
    let c = Math.sin(b);
    return c;
} 
*/

// Se realizo un cambio al nombre de la funcion
// Tambien de las variables
// Pero tambien, pude ver que el uso de let no tenia sentido en esta situacion
// Ya que en ningun momento se esta reasignando el valor de estos ni se esta modificando como tal

function calculateSinOfProductSum(x: number, y: number, z: number) {
    const sum = x + y;
    const product = sum * z;
    const result = Math.sin(product);

    return result;
}