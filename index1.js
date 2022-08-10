function funcion () {
    let result = Number(document.getElementById("numero").value) ;
    
    switch (result) {
        case 1: {
            document.getElementById("resultado").innerHTML = "Usted gano un Iphone 11" ;
            document.getElementById("foto").innerHTML='<img class="imagen"  src="imagenes/iphone.jpeg" width="400px"; />';
           
            break
        }
        case 2: {
            document.getElementById("resultado").innerHTML = "Usted gano un Macbook Pro" ;
            document.getElementById("foto").innerHTML='<img class="imagen"  src="imagenes/mac.webp" width="400px"; />';
            break
        }
        case 3: {
            document.getElementById("resultado").innerHTML = "No ha salido ganador" ;
            document.getElementById("foto").innerHTML='<img class="imagen"  src="imagenes/perdedor.jpeg" width="400px"; />';
            break
        }
        case 4: {
            document.getElementById("resultado").innerHTML = "Usted gano un Viaje a Mexico" ;
            document.getElementById("foto").innerHTML='<img class="imagen"  src="imagenes/mexico.jpeg" width="400px"; />';
            break
        }
        default: {
            document.getElementById("resultado").innerHTML = "Introduzca un numero del 1 al 4" ;
            document.getElementById("foto").innerHTML='<img class="imagen" src="imagenes/perdedor.jpeg" width="400px"; />';
            break
        }
    }
    
}