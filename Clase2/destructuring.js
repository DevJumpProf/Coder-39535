//Array
/* let seleccion = ["Messi", "De Paul", "Martinez", "Di Maria","Alvarez"]; */
// extraemos datos de un array SIN DESTRUCTURACIÓN
/* let messi= seleccion[0] */
/* console.log(messi) */

// OBJETO
/* let auto = {
    marca:"Citroen",
    modelo:"C3",
    anio:1998
} */
// extraemos datos de un OBJETO SIN DESTRUCTURACIÓN
/*     let marcaAuto= auto.marca */

/*     console.log(marcaAuto) */

    //DESTRUCTURING

/* let colores = ["Rojo","Amarillo", "Verde"]
let [color1,color2,color3] = colores

console.log(Yellow) */
/* let seleccion = ["Messi", "De Paul", "Martinez", "Di Maria","Alvarez"]

let[elDiez,,elDibu] = seleccion;

console.log(elDibu) */

// OBJETO

/* let auto = {
    marca:"Citroen",
    modelo:"C3",
    anio:2004
}   

let {marca,modelo:MiModelo} = auto

console.log(MiModelo)
 */


let seleccion = ["Messi", "De Paul", "Martinez", "Di Maria","Alvarez"]
let faltan = ["Lautaro","Paredes"]

//Spread operator arrays
let equipo = [...seleccion,...faltan ]

console.log(equipo)

//Spread operator arrays

let generoComedia={
    nombreGenero:"Comedia",
    popularidad:10
};

let miPobreAngelito={
    titulo: "mi Pobre Angelito",
    ranking:1,
    duracion:120,
    ...generoComedia
}

console.log(miPobreAngelito)

