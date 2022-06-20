
let alertaMolesta = parseInt(prompt("¿Cuantas veces quiere ver una alerta? Tiene que ser al menos una vez"))
    if(alertaMolesta <1) {
         alert("Tiene que ser al menos una vez!! :(") 
       
//Aqui desarrollo ciclo WHILE
    }else{
        while(alertaMolesta > 1){
             alert("Este mensaje aparecera " + alertaMolesta + " veces")
            alertaMolesta--
        }  alert("Este mensaje aparecera " +alertaMolesta+ " vez")
        

// Aqui desarrollo un ciclo FOR
        
            alert("Gracias, una cosa mas")
            let pregunta = parseInt(prompt("¿Cual es su numero favorito?"))
            let otraPregunta = parseInt(prompt("¿Cual es su OTRO numero favorito? :-)"))
            let i = 0
        if(otraPregunta < pregunta){
            let valorOriginal = otraPregunta
            for (otraPregunta; otraPregunta < pregunta; otraPregunta++) {
                i++
                
            
            }                
            alert ("La diferencia entre  " + valorOriginal +" y  " + pregunta + " es  " + i)
        }else{
            let valorOriginal = pregunta
            for (pregunta; pregunta < otraPregunta; pregunta++) {
                i++ 
            }
            alert ("La diferencia entre  " + valorOriginal +" y  " + otraPregunta + " es  " + i)
         

    }



   
    }

