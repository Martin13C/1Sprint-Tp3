import fs from 'fs';


// Clase para representar un Superheroe y sus propiedades e informacion

class superHeroe {
    constructor(id, nombreSuperHeroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo)
    {
        this.id = id;
        this.nombreSuperHeroe = nombreSuperHeroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo
    }
}


// funcion para leer y ordenar los superheroes

export function leerSuperHeroes(ruta)
{
    const datos = fs.readFileSync(ruta, 'utf8');
    const superHeroesArray = JSON.parse(datos);


    // convertir a instancia de superheroe 
    const superHeroes = superHeroesArray.map
    (
        hero => new superHeroe 
        (hero.id, hero.nombreSuperHeroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );


    // ordenar por nombre de superheroe 
    superHeroes.sort((a,b) => a.nombreSuperHeroe.localeCompare (b.nombreSuperHeroe));
    return superHeroes;

}

// nueva funcion para agregar super heroes

export function agregarSuperHeroes(rutaOriginal, rutaNuevos) 
{
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superHeroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperHeroes = JSON.parse(datosNuevos);

    // convertir los nuevos superheroes a instancas de superheroe 
    const instanciasNuevos = nuevosSuperHeroes.map
    (
        hero => new superHeroe(hero.id, hero.nombreSuperHeroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );


    // combinar listas 
    const listaActualizada = [...superHeroesOriginales,...instanciasNuevos];

    // guardar la lista actualizada 
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada,null,2),'utf8');
    console.log('Lista de SuperHeroes actualizada con exito')

}