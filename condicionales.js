let estaVacunado;

//bucle infinito para que solo pueda introducir s/n
//estavacunado solo podra tener valores s/n
for (let i = 0; i >= 0; i++)
{

    estaVacunado = String(prompt("¿Esta usted vacunado? (s / n)")).toLowerCase();
    if (estaVacunado === "s" || estaVacunado === "n")
    {
        break;
    }

}


if (estaVacunado == "n")
{
    //en caso de que no este vacunado, salimos con un mensaje
    console.error("¡¡¡¡ERROR NO ESTA VACUNADO!!!!. PROHIBIDA LA ENTRADA. AMABLEMENTE!!! POLICIA LLEVESELO!!!");
}
else
{

    //el cliente esta vacunado. y declarmos variables que usaremos mas adelante
    let isvip;
    let numero_club_ocimax;

    //Volvemos hacer un bucle infinito paara que solo
    //puede introducir valores s/n
    for (let i = 0; i >= 0; i++) 
    {
        
        isvip = String(prompt("¿Eres del club ocimax? (s / n)")).toLowerCase();
        
        if (isvip === "s" || isvip === "n") {
            break;
        }

    }

    
    if (isvip === "s")
    {
        // numero_cluc_ocimax tendra valor numerico. 
        //No realizmos la comprobacion que si el valor es Nan volver a preguntar
        numero_club_ocimax = Number(prompt("¿Numero del club ocimax? (Valor de test: 111)"));
        console.log("Numero de socio:" + numero_club_ocimax + " Tipo del valor:"  + typeof numero_club_ocimax);

        if (numero_club_ocimax === 111)
        {
            console.log("BIENVENIDO QUERIDO USUARIO!!! LAS PALOMITAS SERAN GRATIS!!");
        }
        else
        {
            console.log("BIENVENIDO!!!! LO SENTIMOS, NO TIENE LOS SUFICIENTES PUNTOS PARA UNAS PALOMITAS GRATIS")

        }
    }
    
    //dependiendo del tipo de pelicula mostraremos una ruta diferente para cada sala
    let pelicula = String(prompt("¿Que pelicula quieres ver? (Valores de test: 1 / 2 / 3 )?"));

    console.log("   -------------------------");
    console.log("   |       PANTALLA        |");
    console.log("   -------------------------");
    console.log("   | A B C D E F G H I J K |");
    console.log("===|=======================|====");
    console.log(" 1 | . . . . . . . . . . . | 1 |");
    console.log(" 2 | . . . . . . . . . . . | 2 |");
    console.log(" 3 | . . X . . . . X . . . | 3 |");
    console.log(" 4 | C C C C C C C C C C C | 4 |");
    console.log(" 5 | C C C C C C C C C C C | 5 |");
    console.log(" 6 | . . . . . X . . . . . | 6 |");
    console.log(" 7 | . . . . . . . . . . . | 7 |");
    console.log(" 8 | . . . . . . X . . . . | 8 |");
    console.log("===|=======================|===|");
    console.log("   | A B C D E F G H I J K |");
    console.log("¿Donde quiere sentarse?");

    setTimeout(() => 
    { 
        
        let mensaje = "¿En que casilla quiere sentarse?\nX=> Ocupado\nC => Asientos VIP\n. => Asientos Libres\n Formato a1 / A1";
        
        const letras_correctas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
        const numeros_correctos = ["1", "2", "3", "4", "5", "6", "7", "8"];
        
        //listdo de sillas ocupadas, comprobaremos que no se pueda sentar
        const sillas_ocupadas = ["c3", "h3", "f6", "g8"]
        
        //variables para comprobar el estado de la coordenada
        let contiene_letra = false;
        let contiene_numero = false;
        
        let casilla_sentado = String(prompt(mensaje)).toLowerCase(); 
        for (let i = 0; i >= 0; i++) 
        {

            mensaje = "¿En que casilla quiere sentarse?\nX=> Ocupado\nC => Asientos VIP\n. => Asientos Libres\n Formato a1 / A1";
            contiene_letra = false;
            contiene_numero = false;

            //recorremos en busca de coincidencia en las letras_correctas
            //por defecto la letra no es correcta y cambiamos el valor a true
            // en caso de que este dentro del listado
            for (let x = 0; x < letras_correctas.length; x++) 
            {
                if (casilla_sentado[0] === letras_correctas[x]) 
                {
                    contiene_letra = true;
                }

            }

            //realizamos misma operacion de coincidencia en numeros_correctos
            for (let x = 0; x < numeros_correctos.length; x++) 
            {
                if (casilla_sentado[1] === numeros_correctos[x]) 
                {
                    contiene_numero = true;
                }

            }
            
            //comprobamos que no puede sentarse en los asientos ocupados
            let puedo_sentarme = true;
            for (let j = 0; j < sillas_ocupadas.length; j++)
            {
                if (sillas_ocupadas[j] === casilla_sentado)
                {
                    puedo_sentarme = false;
                }

            }

            if (contiene_letra === false || contiene_numero === false || puedo_sentarme === false)
            {
                // repetir bucle

                //personalizamos mensaje en caso de que la silla este ocupada
                if (puedo_sentarme === false)
                {
                    mensaje = "SILLA OCUPADA\n" + mensaje;
                }
                casilla_sentado = String(prompt(mensaje)).toLowerCase();
            }
            else 
            {

                //comprobamos que si nos es vip, no pueda sentarse en la fila 4 y 5
                if (isvip === "n") 
                {
                    if (casilla_sentado[1] === "4" || casilla_sentado[1] === "5") 
                    {
                        mensaje = "LO SENTIMOS, NO PUEDE SENTARSE EN LOS ASIENTOS VIP.\n" + mensaje;
                        
                        casilla_sentado = String(prompt(mensaje)).toLowerCase();
                    }
                    else
                    {
                        //salimos
                        break;
                    }
                }
                else
                {
                    break;
                }
                

            }

        }

        //Despues de introducir los datos y pagar, ahora nos dirigimos a la sala
        let posicion_inicial_personaje = [15, 11];

        let posicion_personaje = posicion_inicial_personaje;
        console.log("\n");
        console.log("\n");

        //los diferentes escenarios que el personaje podra recorrer
        const matrices_escena = 
        [
                [
                    ("##############______##########"),
                    ("#...##########.............###"),
                    ("#...........#######........###"),
                    ("#............#######.......###"),
                    ("#...#####....#########.....###"),
                    ("#...#TT##....#########.....###"),
                    ("#...##TT#....#########.....###"),
                    ("#...#OOO#..................###"),
                    ("#...##OO#..................###"),
                    ("#...##########################"),
                    ("#...................##########"),
                    ("###########.........##########")
                ],

                [
                    ("#####################______###"),
                    ("#..........................#O#"),
                    ("#...#####....######........###"),
                    ("#...#####....#################"),
                    ("#...#OOO#....###OOOO##.....###"),
                    ("#...#TT##....#########.....###"),
                    ("#########....#########.....###"),
                    ("#..........................##0"),
                    ("#..........................#0#"),
                    ("#...##########################"),
                    ("#...................##########"),
                    ("###########.........##########")
                ],

                [
                    ("#______#######################"),
                    ("#.......#..................###"),
                    ("#.......#....######........###"),
                    ("#...#####....###OOO###.....###"),
                    ("#...#OOO#....###OOOO##.....###"),
                    ("#...#TT##....#########.....###"),
                    ("#...#####....#########.....###"),
                    ("#...##.......#.............##0"),
                    ("#...##.......#.............#0#"),
                    ("#...##....####.....###########"),
                    ("#.........#.........##########"),
                    ("###########.........##########")
                ],

        ];

        //asignamos segun la preferencia de nuestra pelicula
        let matrix_escena;

        switch(pelicula)
        {
            case "1":
                matrix_escena = matrices_escena[0];
            break;

            case "2":
                matrix_escena = matrices_escena[1];
                break;

            case "3":
                matrix_escena = matrices_escena[2];
                break;

            default:
                matrix_escena = matrices_escena[0];
            break;

        }

        //para no confundir pasado a nombre de coordenadas x e y
        const y = posicion_inicial_personaje[1];
        const x = posicion_inicial_personaje[0];

        //en la matriz sobreescribimos la posicion del personaje
        let fila = matrix_escena[y];
        fila = fila.substring(0, x) + "X" + fila.substring((x + 1), fila.length);
        matrix_escena[y] = fila;

        //mostramos la matriz
        for (let i = 0; i < matrix_escena.length; i++)
        {
            console.log(matrix_escena[i]);
        }
        
        console.log("\n");
        console.log("\n");


        //bucle infinito hasta que llegue a la zona FIN ___
        for (let j = 0; j >= 0; j++)
        {
            
            //pedimos al usuario por el movimiento del personaje
            let direccion = String(prompt("LLeva hasta ___ al personaje. ¿Que direccion quieres?\nw => arriba\ns => abajo\na=> izquierda\nd => derecha")).toLowerCase(); 
            //para no confundirnos 
            let y_posicion = posicion_personaje[1];
            let x_posicion = posicion_personaje[0];

            //segun la direccion introducida awsd
            //realizar el calculo del proximo movimiento del personaje
            //tenemos en cuenta los limites de la matriz
            switch (direccion)
            {
                case "w": 
                
                    y_posicion--;
    
                    if (y_posicion < 0) 
                    {
                        y_posicion = 0;
                    }

                break;
                case "s": 
                
                    y_posicion++;
    
                    if (y_posicion >= matrix_escena.length)
                    {
                        y_posicion = (matrix_escena.length - 1);
                    }

                break;
                case "a":
                    x_posicion--;
    
                    if (x_posicion < 0) 
                    {
                        x_posicion = 0;
                    }
                
                break;
                case "d":
                    x_posicion++;
    
                    if (x_posicion > matrix_escena[0].length - 1)
                    {
                        x_posicion = matrix_escena[0].length - 1;
                    }
    
                
                break;
                default: break;
            }

            //si golpeamos con un pared, continuamos con el bucle
            if (matrix_escena[y_posicion][x_posicion] === "#")
            {
                continue;
            }

            //si hemos llegaod la final de la matriz
            if (matrix_escena[y_posicion][x_posicion] === "_")
            {
                
                let fila_y = matrix_escena[posicion_personaje[1]];
                fila_y = fila_y.substring(0, (posicion_personaje[0])) + "." + fila_y.substring((posicion_personaje[0] + 1), fila_y.length);
                matrix_escena[posicion_personaje[1]] = fila_y;

                posicion_personaje[0] = x_posicion;
                posicion_personaje[1] = y_posicion;
                
                fila_y = matrix_escena[posicion_personaje[1]];
                fila_y = fila_y.substring(0, (posicion_personaje[0])) + "X" + fila_y.substring((posicion_personaje[0] + 1), fila_y.length);
                matrix_escena[posicion_personaje[1]] = fila_y;
                
                for (let i = 0; i < matrix_escena.length; i++) 
                {
                    console.log(matrix_escena[i]);
                }
                console.log("\n");
                console.log("\n");
                console.log("FIN!! DISFRUTA DE LA PELICULA");

                break;
            }
            else if (matrix_escena[y_posicion][x_posicion] === ".")
            {

                //el proximo movimiento del personaje esta libre
                //antes de mover al personaje, sustituimos la X por una .
                //y luego movemos al personaje 

                let fila_y = matrix_escena[posicion_personaje[1]];
                fila_y = fila_y.substring(0, (posicion_personaje[0] )) + "." + fila_y.substring((posicion_personaje[0] + 1), fila_y.length);
                matrix_escena[posicion_personaje[1]] = fila_y;

                posicion_personaje[0] = x_posicion;
                posicion_personaje[1] = y_posicion;

                fila_y = matrix_escena[posicion_personaje[1]];
                fila_y = fila_y.substring(0, (posicion_personaje[0] )) + "X" + fila_y.substring((posicion_personaje[0] + 1), fila_y.length);
                matrix_escena[posicion_personaje[1]] = fila_y;

                for (let i = 0; i < matrix_escena.length; i++) 
                {
                    console.log(matrix_escena[i]);
                }
                console.log("\n");
                console.log("\n");

            }

        }


    
    }, 6000);


    



}    



//   ------------------- -----
//   |       PANTALLA        |
//   ----------------- -------
//   | A B C D E F G H I J K |
//===|=======================|====
// 1 | . . . . . . . . . . . | 1 |
// 2 | . . . . . . . . . . . | 2 |
// 3 | . . X . . . . X . . . | 3 |
// 4 | C C C C C C C C C C C | 4 |
// 5 | C C C C C C C C C C C | 5 |
// 6 | . . . . . X . . . . . | 6 |
// 7 | . . . . . . . . . . . | 7 |
// 8 | . . . . . . X . . . . | 8 |
//===|=======================|===|
//   | A B C D E F G H I J K |


// ------------------------------
// |       PANTALLA             |
// ------------------------------
//==|=============================
//  |  A1 B1 C1 D1 E1 F1 G1 H1
//  |  A2 B2 C2 D2 E2 F2 G2 H2
//  |  A3 B3 C3 D3 E3 F3 G3 H3
//  |  A4 B4 C4 D4 E4 F4 G4 H4
//  |  A5 B5 C5 D5 E5 F5 G5 H5
//  |  A6 B6 C6 D6 E6 F6 G6 H6
//  |  A7 B7 C7 D7 E7 F7 G7 H7
//  |  A8 B8 C8 D8 E8 F8 G8 H8



