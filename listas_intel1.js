function obtenerRepetidosYNoRepetidos(lista1, lista2) {
  // Concatenamos ambas listas en una sola
  const listaConcatenada = lista1.concat(lista2);

  // Creamos un conjunto (Set) para almacenar elementos únicos
  const elementosUnicos = new Set();

  // Creamos un conjunto (Set) para almacenar elementos repetidos
  const elementosRepetidos = new Set();

  // Creamos una lista para almacenar elementos no repetidos
  const elementosNoRepetidos = [];

  // Iteramos sobre la lista concatenada
  for (const elemento of listaConcatenada) {
    if (elementosUnicos.has(elemento)) {
      // Si el elemento ya está en elementosUnicos, lo movemos a elementosRepetidos
      elementosUnicos.delete(elemento);
      elementosRepetidos.add(elemento);
    } else {
      // Si el elemento no está en elementosUnicos, lo agregamos allí
      elementosUnicos.add(elemento);
    }
  }

  // Convertimos el conjunto de elementosUnicos de nuevo a una lista
  elementosUnicos.forEach((elemento) => {
    elementosNoRepetidos.push(elemento);
  });

  return {
    repetidos: Array.from(elementosRepetidos),
    noRepetidos: elementosNoRepetidos,
  };
}

// Ejemplo de uso:
const lista1 = [1, 2, 3, 4, 5];
const lista2 = [3, 4, 5, 6, 7];
const resultado = obtenerRepetidosYNoRepetidos(lista1, lista2);

console.log("Elementos Repetidos:", resultado.repetidos);
console.log("Elementos No Repetidos:", resultado.noRepetidos);
