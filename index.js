import { universidad } from "./utils/arreglo.js";

let uni = universidad;
//Creando dos arreglos
let alumnos = uni.alumnos;
let docentes = uni.docentes;

//console.log(alumnos);
//console.log(docentes);

//Acceder a un elemento de Array mediante su índice
//console.log(alumnos[0]);
//console.log(docentes[1]);

//Recorrer un Array

alumnos.forEach(alumno =>{
    //console.log(alumno.nombre);
});

let materias = [];

alumnos.forEach(alumno=>{
    materias.push(alumno.materias);
});

console.log(materias);

materias.forEach(materia=>{
    //console.log(materia);
});

let alummnoNuevo = {
    boleta: 3,
    nombre: "Pedro",
    apellidos: "Alejo Santiz",
    email: "a155678@gmail.com",
    matricula: "a155678",
    materias: [
        {
            materia: "Base de datos",
            calificacion: 8,
            profesor: "Jose Toledo Melendez Jurado",
            horario: "Lunes 07:00 p.m. - 08:00 p.m."
        },
        {
            materia: "Sistemas operativos",
            calificacion: 6,
            profesor: "Sergio Escobar Almonte",
            horario: "Lunes 05:00 p.m. - 06:00 p.m."
        },
        {
            materia: "Matematicas discretas",
            calificacion: 7,
            profesor: "Enrique Guzman Gumeta",
            horario: "Lunes 04:00 p.m. - 05:00 p.m."
        }
    ]
}

//alumnos.push(alummnoNuevo);
//console.log(alumnos);


//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada 
//por la función dada.
let nombreDocente = [];

docentes.forEach(name =>{
    nombreDocente.push(name.nombre);
});

//console.log(nombreDocente);

const resultado = nombreDocente.filter(word => word.length > 6);
//console.log(resultado);

//Array.prototype.findIndex() - El método findIndex() devuelve el índice del primer elemento de un array 
//que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

let apellidoDocente = [];

docentes.forEach(ape => {
    apellidoDocente.push(ape.apellidos);
});

//console.log(apellidoDocente);

const index = apellidoDocente.findIndex(nom => nom === "Jonapa Guillen");

//console.log(index);
//console.log(apellidoDocente[index]);

//Array.prototype.find() - El método find() devuelve el valor del primer elemento del array que cumple 
//la función de prueba proporcionada.

const encontrado = apellidoDocente.find(apellido => apellido == "Martinez Estrada");
//console.log(encontrado);

//Array.prototype.map() - El método map() crea un nuevo array con los resultados de la llamada a la 
//función indicada aplicados a cada uno de sus elementos.
const datosMaterias = [];

for(let i=0; i<materias.length; i++){
    console.log(materias[i]);
    datosMaterias.push(materias[i]);
}

for(let i=0; i<datosMaterias.length; i++){
    
}