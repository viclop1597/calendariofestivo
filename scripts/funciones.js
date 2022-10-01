//Botones y funciones

//Datos

const inputDay = document.getElementById("day")
const inputMonth = document.getElementById("month")
const inputYear = document.getElementById("year")
const inputDate = document.getElementById("date")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCIONES
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//creacion de boton para ejecutar
const buttonDate = document.getElementById("Datec");

//funcion laborable-no 
const days = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sabado"]; //index 0 al 6
const Laborable = (Semana) => { 
    if (Semana>=1&&Semana<=5) return"Sí, es día laborable."
    else return "No, no es día laborable"
} 

//Definir la impresión
const day = () => { 
    const dia = new Date(inputYear.value, inputMonth.value - 1, inputDay.value) 
    const Semana = dia.getDay()
    inputDate.value = `El día es: ${days[Semana]}. ${Laborable(Semana)}`
}

//Impresión del día y el mensaje.
buttonDate.addEventListener("click", day)


// Coment: Recibí ayuda de Diego