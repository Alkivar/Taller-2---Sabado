
let aprendiz={
    nombre:"Alkivar",
    edad:11,
    estatura:1.70,
    planeta:"luna"
}

function Informacion(padawan,clasificar){

    if(padawan.edad<15){
        let mensaje= "es menor de 15, y le toca manejo de la fuerza."
        clasificar(mensaje);
    }else{
        let mensaje="mayor de 15, y le toca el manejo de sable de luz."
        clasificar(mensaje);
}}

Informacion(aprendiz, function(mensaje){
    
   console.log(aprendiz.nombre+ " Es " + mensaje);

})

