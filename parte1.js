let librosDesordenados = [
 { codigo: "L008", titulo: "Ingeniería de Software", anio: 2021
},
 { codigo: "L003", titulo: "Introducción a la IA", anio: 2023 },
 { codigo: "L001", titulo: "Algoritmos I", anio: 2019 },
 { codigo: "L010", titulo: "Análisis Numérico", anio: 2020 },
 { codigo: "L005", titulo: "Redes de Computadores", anio: 2022 },
 { codigo: "L004", titulo: "Bases de Datos", anio: 2018 }
];

let librosOrdenados = librosDesordenados.sort((a, b) => a.codigo.localeCompare(b.codigo)); //Ordenar por código
console.log(librosDesordenados)
function LibroPorCodigo(lista, codigoBuscado) {
  let izquierda = 0;
  let derecha = lista.length - 1;

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);
    let codigoMedio = lista[medio].codigo;

    if (codigoMedio === codigoBuscado) {
      return lista[medio];
    } else if (codigoMedio < codigoBuscado) {
      izquierda = medio + 1;
    } else {
      derecha = medio - 1;
    } 
  }

  return null; // No encontrado
}

let resultado = LibroPorCodigo(librosOrdenados, "L010");
console.log(resultado);
