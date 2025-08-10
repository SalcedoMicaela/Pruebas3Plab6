function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('solo se aceptan numeros');
  }  if (a < 0 || b < 0) {
    throw new Error('Solo se aceptan numeros positivos');
  }
  return a + b;
}

module.exports = suma;
