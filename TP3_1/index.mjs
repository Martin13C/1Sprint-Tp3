import { agregarSuperHeroes, leerSuperHeroes } from "./utils.mjs";


const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperHeroes.txt';

// agregar nuevos superheroes 
agregarSuperHeroes(archivoOriginal, archivoNuevos)

// leer y mostrar la lista de superheroes ordenada y actualizada

const superHeroes = leerSuperHeroes(archivoOriginal);
console.log('Superheroes ordenados: ');
console.log(superHeroes);



// base para ingresar nuevos superheroes en el archivo txt formato JSON 


// {"id":, "nombreSuperheroes":"","nombreReal":"","nombreSociedad":"","edad:,"planetaOrigen":"","debilidad":"","poder":["","","",""],"habilidadEspecial":"","aliado":[""],"enemigo":[""]}