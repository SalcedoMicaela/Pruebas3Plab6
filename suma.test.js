const suma = require('./sum');

test('Suma 1+5 =6', () => {
  expect(suma(1, 5)).toBe(6);
});

