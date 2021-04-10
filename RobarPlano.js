let info=(planos)=>{

    if(planos <=10 ){
    
        let mensaje1=" Tu plano es verdadero y es el #" +planos;
        let mensaje2=" Chewbacca y Han pueden abordar :) ";
        console.log(mensaje1);
        console.log(mensaje2);
    
    }else{
        let error=" El plano #"+planos + " es falso :( "
        console.log(error);
        }
    }
    
    info( 1 )