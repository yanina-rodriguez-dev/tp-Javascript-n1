 //septimo ejercicio 
 // Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

 let num1 = parseInt(prompt('Ingrese primer numero'));
 let num2 = parseInt(prompt('Ingrese segundo numero'));
 let num3 = parseInt(prompt('Ingrese tercer numero'));
 
 if( num1 > num2 && num3){
 document.write('El mayor de los tres es el numero '+ num1)
 }
 else if( num2 > num1 && num3){
 document.write('El mayor de los tres es el numero '+ num2)
 }
 else if( num3 > num1 && num2){
 document.write('El mayor de los tres numeros es el '+ num3)
 }