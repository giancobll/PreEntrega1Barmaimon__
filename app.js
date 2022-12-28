function menu()
{
    let opcion, nombre,lado, i      
    
    nombre = prompt("Hola bienvenido a ¡Penalty Shooter!\n \nIngresa un nombre para usar en el juego.") 

    do 
    {               
        opcion = parseInt(prompt("Hola "+nombre+"\n *Tienes 5 Intentos de patear o tapar penales.*\nEscoja una opción para iniciar:\n1. Tirar penales.\n2. Tapar penales.\n3. Resultado.\n4. Salir."))
        switch (opcion) {
            case 1: //tirar penal
                for (i = 1; i < 6; i++)
                {
                    lado = parseInt(prompt("A que lado deseas tirar el penal. Escoja una opción: \n1. Izquierda\n2. Al medio\n3. Derecha"))                  
                    tirarPenales(lado,i);    
                }    
                alert("Hola "+nombre+" lograste meter "+ cont1 +" penales hasta el momento\n \nGracias por jugar. Regresa al Menú principal")
                break;
            case 2: //tapar penal  
                for (i = 1; i < 6; i++)
                {
                    lado = parseInt(prompt("A que lado crees que pateará el penal. Escoja una opción: \n1. Izquierda\n2. Al medio\n3. Derecha"))
                    taparPenales(lado,i);                    
                }        
                alert("Hola "+nombre+" lograste tapar "+ cont2 +" penal(es) hasta el momento\n \nGracias por jugar. Regresara al Menú principal")              
                break;
            case 3: //resultado  
                alert("Hola "+nombre+ ". Hasta el momento, este es tu puntaje: \nLograste meter "+cont1+" gol(es) y tapaste "+cont2+" penal(es)")            
                break;
            case 4: //salir  
                alert("Gracias por jugar "+nombre+ ". Regresa pronto...")            
                break;         
            default:
                alert("Opción inválida. "+nombre+". Ingresa una opción correcta...")
        } 
    } 
    while (opcion != 4);    
}

let cont1 = 0

function tirarPenales(opcLado,num) 
{     
    if (opcLado != getRandom()) 
    {
        alert("El penal número "+ num + " fue Gooollllll");
        cont1 = cont1 + 1          
    } 
    else 
    {
        alert("El penal número "+ num + " lo Fallaste!!!!");       
    }   
}

let cont2 = 0

function taparPenales(opcLado,num) 
{ 
    if (opcLado != getRandom()) 
    {
        alert("El penal número "+ num + " fue Gooollllll lo siento");   
    } 
    else 
    {
        alert("El penal número "+ num + " lo tapaste Felicidades!!!!");
        cont2 = cont2 + 1       
    }         
}

function getRandom() 
{
    let min = 1
    let max = 3

    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (1 + max - min) + min);    
}

menu()