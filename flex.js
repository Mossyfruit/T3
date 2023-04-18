'use strict';
//pedimnos nro
var cuadro=parseInt(prompt("Di en que cuadro quieres saludar (1 a 5)",""));

//cuadro valdra entre 1 y 5
var selector= "c"+cuadro;

var estecuadro=" ";
switch(cuadro){
    case 1:
        estecuadro=document.getElementById("c1");
        break;
    case 2:
        estecuadro=document.getElementById("c2");
        break;
    case 3:
        estecuadro=document.getElementById("c3");
        break;
    case 4:
        estecuadro=document.getElementById("c4");
        break;
    case 5:
        estecuadro=document.getElementById("c5");
        break;
    default:
        alert("Has introducido mal un numero")
}
if(estecuadro != ""){
    estecuadro.innerHTML="HOLA";
}

/* var x1,x2, cont
        x1=prompt('Escriba el numero a repetir')
        x2=prompt('Escriba el numero de veces que debe repetirse')
        x1=parseInt(x1)
        x2=parseInt(x2)
        cont=0;
        while(cont!=x2){
            cont++;
        document.write(x1)
        if(cont % 8 == 0){
            document.write('<br>');
        }
        }*/
      
        
    
