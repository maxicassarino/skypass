localStorage.clear()

localStorage.setItem(`Bienvenida`, `Hola Pasajeros!`)

// OJBETOS

const vuelos = [{Lugar: "New York", Pasaje: 1095, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Madrid", Pasaje: 1500, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Miami", Pasaje: 950, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Londres", Pasaje: 1750, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Aruba", Pasaje: 800, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Tokio", Pasaje: 2200, Pasajeros: 1, Recargo: "21%", Total: 0}
]

const descripcionesLugar = [{Lugar: "New York", Descripción: "Una atmósfera cosmopolita envuelve a sus más de 8 millones de habitantes y turistas que transitan por sus calles día y noche. Entre rascacielos emblemáticos y parques que te invitan a bajar el ritmo, el destino está lleno de experiencias que son verdaderos descubrimientos multiculturales."},
                        {Lugar: "Madrid", Descripción: "La ciudad del encanto y la elegancia. Su arquitectura y espacios desbordan personalidad. Conocé su Plaza Mayor y el Palacio Real. La comida en España es un imperdible, desde su desayuno hasta la cena van a ser una fiesta en tu paladar."},
                        {Lugar: "Miami", Descripción: "Uno de los destinos más populares para pasar unas vacaciones inolvidables. Con playas de aguas cálidas y cristalinas, Miami tiene muchas atracciones turísticas para sus visitantes, tanto locales como extranjeros."},
                        {Lugar: "Londres", Descripción: "La capital inglesa con mucha historia y tradiciones monárquicas. Es una de las ciudades más visitadas del mundo, un destino multirracial que cuenta con varios museos, bibliotecas, universidades, galerías de arte y eventos deportivos."},
                        {Lugar: "Aruba", Descripción: "Conocida como la isla de la felicidad, llena de colores y de agua transparente, Aruba es el destino para disfrutar de la playa. Descubrí Palm Beach y sus deportes acuáticos, podés practicar windsurf o kitesurf o solo hacer la plancha en el mar."},
                        {Lugar: "Tokio", Descripción: "Es una metrópolis que combina la tradición japonesa con la modernidad. La ciudad es conocida por su impresionante horizonte de rascacielos y, a la vez, por sus santuarios históricos. La vida nocturna es animada y diversa, con una abundancia de restaurantes, bares y discotecas"}
]



// FUNCIONES

// MOFIFICAR DATOS

modificarDatos = (pasajeros) => {
    for (const vuelo of vuelos) {
        vuelo.Pasajeros = pasajeros;
        vuelo.Total = (vuelo.Pasaje * pasajeros) * 1.21;
    }
}

// HTML LUGAR

htmlLugar = (main, eleccionDestino, buscarDescripcionLugar) => {
    let fotoLugar = eleccionDestino
    if (eleccionDestino == "New York") {
        fotoLugar = "ny"
    }
    let section = document.createElement("section");
    section.id = "destinoLugar"
    section.innerHTML =    `<img src="assets/images/Inicio/ciudades/${fotoLugar}.jpg" alt="" class="destinoImg">
                            <div class="datos">
                                <h2>${eleccionDestino}</h2>
                                <p>${buscarDescripcionLugar.Descripción}</p>
                            </div>`;
    main.appendChild(section);
}

// HTML HOTEL

htmlHotel = (main, eleccionHotel, buscarDescripcionLugar) => {
    let fotoHotel = eleccionHotel
    if (eleccionHotel == "Hilton Hotel") {
        fotoHotel = "Hilton"
    }
    else if (eleccionHotel == "Marriot International") {
        fotoHotel = "Marriot"
    }
    else {
        fotoHotel = "Huanzhu"
    }
    let section2 = document.createElement("section");
    section2.id = "destinoHotel"
    section2.innerHTML =    `<div class="datos">
                                <h2>${eleccionHotel}</h2>
                                <p>${buscarDescripcionLugar.Descripción}</p>
                            </div>
                            <img src="assets/images/Inicio/ciudades/${fotoHotel}.jpg" alt="" class="destinoImg">`;
    main.appendChild(section2);
}





// PROGRAMA PRINCIPAL

// BOTON BUSCADOR

let boton = document.getElementById("boton")

boton.onclick = () => {
    alert(`Bienvenido! Inicie su consulta`);
    let eleccionDestino = prompt("Ingrese su destino de interés");
    let eleccionHotel = prompt("Ingrese el hotel deseado");
    let pasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"))

    // MODIFICACION DE DATOS
    modificarDatos(pasajeros)

    // BUSQUEDA DE DATOS
    const buscarVuelo = vuelos.find(busqueda => busqueda.Lugar === eleccionDestino)
    const buscarDescripcionLugar = descripcionesLugar.find(busqueda => busqueda.Lugar === eleccionDestino)

    // HTML DESTINO

    const main = document.getElementsByTagName("main")[0]
    htmlLugar(main, eleccionDestino, buscarDescripcionLugar)
    htmlHotel(main, eleccionHotel, buscarDescripcionLugar)
}


// 27:00