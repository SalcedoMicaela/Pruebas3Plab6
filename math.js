// Aproximación de la derivada de una función f en el punto x usando diferencia finita
function derivadaNumerica(f, x, h = 0.0001) {
  return (f(x + h) - f(x)) / h;
}

// Método de la bisección para encontrar raíz de una función f en el intervalo [a, b]
function biseccion(f, a, b, tol = 0.0001, maxIter = 100) {
  if (f(a) * f(b) >= 0) {
    return null; // No garantiza raíz en [a,b]
  }
  let c = a;
  for (let i = 0; i < maxIter; i++) {
    c = (a + b) / 2;
    if (Math.abs(f(c)) < tol) {
      return c; // Raíz aproximada
    }
    if (f(a) * f(c) < 0) {
      b = c;
    } else {
      a = c;
    }
  }
  return c; // Mejor aproximación tras iteraciones
}

module.exports = { derivadaNumerica, biseccion };
