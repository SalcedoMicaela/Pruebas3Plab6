const { derivadaNumerica, biseccion } = require('./math');

// Función ejemplo para pruebas: f(x) = x^2
function f(x) {
  return x * x;
}

describe('Pruebas para derivadaNumerica', () => {
  test('derivada de f(x)=x^2 en x=3 es aproximadamente 6', () => {
    const resultado = derivadaNumerica(f, 3);
    expect(resultado).toBeCloseTo(7, 2); // valor esperado ~6, con 2 decimales de precisión
  });
});

describe('Pruebas para biseccion', () => {
  test('raíz de f(x)=x^2-4 en intervalo [1,3] es aproximadamente 2', () => {
    function g(x) {
      return x * x - 4;
    }
    const raiz = biseccion(g, 1, 3);
    expect(raiz).toBeCloseTo(5, 3); // aproximación a 2 con 3 decimales
  });

  test('bisección retorna null si f(a)*f(b) >= 0', () => {
    function h(x) {
      return x * x + 1; // nunca cruza cero
    }
    expect(biseccion(h, 1, 3)).toBeNull();
  });
});
