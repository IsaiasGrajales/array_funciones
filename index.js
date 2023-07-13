import { universidad } from "./utils/arreglo.js";

let uni = universidad;
//Creando dos arreglos
let alumnos = uni.alumnos;
let docentes = uni.docentes;

console.log(alumnos);
console.log(docentes);

//Acceder a un elemento de Array mediante su índice
console.log(alumnos[0]);
console.log(docentes[1]);

//Recorrer un Array

alumnos.forEach(alumno =>{
    console.log(alumno.nombre);
});

let materias = [];

alumnos.forEach(alumno =>{
    materias = alumno.materias;
});

console.log(materias);

materias.forEach(materia=>{
    console.log(materia);
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

const alumnos2 = universidad.alumnos;

console.log(alumnos2);



//const resultado = alumnos.filter(letra => letra > 2);
//console.log(resultado);