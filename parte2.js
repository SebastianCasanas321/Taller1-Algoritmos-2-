// Arreglo original
let librosCasiOrdenados = [
  { codigo: "L001", titulo: "Algoritmos I", anio: 2019 },
  { codigo: "L002", titulo: "Estructuras de Datos", anio: 2020 },
  { codigo: "L003", titulo: "Introducción a la IA", anio: 2023 },
  { codigo: "L005", titulo: "Redes de Computadores", anio: 2022 },
  { codigo: "L004", titulo: "Bases de Datos", anio: 2018 }, // fuera de lugar
  { codigo: "L006", titulo: "Sistemas Operativos", anio: 2017 }
];

// Algoritmo de Burbuja
function burbuja(libros) {
  let comparaciones = 0;
  let intercambios = 0;
  let n = libros.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparaciones++;
      if (libros[j].codigo > libros[j + 1].codigo) {
        [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
        intercambios++;
      }
    }
  }

  return { ordenado: libros, comparaciones, intercambios };
}

// Algoritmo de Inserción
function insercion(libros) {
  let comparaciones = 0;
  let intercambios = 0;
  let n = libros.length;

  for (let i = 1; i < n; i++) {
    let actual = libros[i];
    let j = i - 1;

    while (j >= 0 && libros[j].codigo > actual.codigo) {
      comparaciones++;
      libros[j + 1] = libros[j]; // Desplazamiento
      intercambios++;
      j--;
    }

    if (j >= 0) comparaciones++; // Comparación que rompe el while

    libros[j + 1] = actual;
  }

  return { ordenado: libros, comparaciones, intercambios };
}

// Ejecutar y mostrar resultados
let resultadoBurbuja = burbuja([...librosCasiOrdenados]);
console.log("Resultado Burbuja:");
console.log(resultadoBurbuja.ordenado);
console.log(`Comparaciones: ${resultadoBurbuja.comparaciones}`);
console.log(`Intercambios: ${resultadoBurbuja.intercambios}`);

let resultadoInsercion = insercion([...librosCasiOrdenados]);
console.log("Resultado Inserción:");
console.log(resultadoInsercion.ordenado);
console.log(`Comparaciones: ${resultadoInsercion.comparaciones}`);
console.log(`Intercambios: ${resultadoInsercion.intercambios}`);