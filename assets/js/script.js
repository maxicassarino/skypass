localStorage.clear()

localStorage.setItem(`Bienvenida`, `Hola Pasajeros!`)

// OJBETOS

const vuelos = [{ID: "v1", Lugar: "New York", Pasaje: 1095, Pasajeros: 1, Recargo: "21%", Total: 0},
                {ID: "v2", Lugar: "Madrid", Pasaje: 1500, Pasajeros: 1, Recargo: "21%", Total: 0},
                {ID: "v3", Lugar: "Miami", Pasaje: 950, Pasajeros: 1, Recargo: "21%", Total: 0},
                {ID: "v4", Lugar: "Londres", Pasaje: 1750, Pasajeros: 1, Recargo: "21%", Total: 0},
                {ID: "v5", Lugar: "Aruba", Pasaje: 800, Pasajeros: 1, Recargo: "21%", Total: 0},
                {ID: "v6", Lugar: "Tokio", Pasaje: 2200, Pasajeros: 1, Recargo: "21%", Total: 0}
]

const descripcionesLugar = [{Lugar: "New York", Descripción: "Una atmósfera cosmopolita envuelve a sus más de 8 millones de habitantes y turistas que transitan por sus calles día y noche. Entre rascacielos emblemáticos y parques que te invitan a bajar el ritmo, el destino está lleno de experiencias que son verdaderos descubrimientos multiculturales."},
                        {Lugar: "Madrid", Descripción: "La ciudad del encanto y la elegancia. Su arquitectura y espacios desbordan personalidad. Conocé su Plaza Mayor y el Palacio Real. La comida en España es un imperdible, desde su desayuno hasta la cena van a ser una fiesta en tu paladar."},
                        {Lugar: "Miami", Descripción: "Uno de los destinos más populares para pasar unas vacaciones inolvidables. Con playas de aguas cálidas y cristalinas, Miami tiene muchas atracciones turísticas para sus visitantes, tanto locales como extranjeros."},
                        {Lugar: "Londres", Descripción: "La capital inglesa con mucha historia y tradiciones monárquicas. Es una de las ciudades más visitadas del mundo, un destino multirracial que cuenta con varios museos, bibliotecas, universidades, galerías de arte y eventos deportivos."},
                        {Lugar: "Aruba", Descripción: "Conocida como la isla de la felicidad, llena de colores y de agua transparente, Aruba es el destino para disfrutar de la playa. Descubrí Palm Beach y sus deportes acuáticos, podés practicar windsurf o kitesurf o solo hacer la plancha en el mar."},
                        {Lugar: "Tokio", Descripción: "Es una metrópolis que combina la tradición japonesa con la modernidad. La ciudad es conocida por su impresionante horizonte de rascacielos y, a la vez, por sus santuarios históricos. La vida nocturna es animada y diversa, con una abundancia de restaurantes, bares y discotecas"}
]



// FUNCIONES

// SUGERIDOS

const destinos = ["New York", "Madrid", "Miami", "Londres", "Aruba", "Tokio"]
const hoteles = ["Hilton Hotel", "Marriot International", "Huanzhu Palace"]
let posicionDestinos = null
let posicionHoteles = null

// Abrir Sugeridos

const agregarDSugeridos = () => {
    $("#destinosSugeridos").css("display", "block");
    for (const destino of destinos) {
        $("#destinosSugeridos").append(`
            <li>${destino}</li>
        `)
    }
}

const agregarHSugeridos = () => {
    $("#hotelesSugeridos").css("display", "block");
    for (const hotel of hoteles) {
        $("#hotelesSugeridos").append(`
            <li>${hotel}</li>
        `)
    }
}

// Cerrar Sugeridos

const removerDSugeridos = () => {
    $("#destinosSugeridos").css("display", "none");
    $("#destinosSugeridos").html("")
}

const removerHSugeridos = () => {
    $("#hotelesSugeridos").css("display", "none");
    $("#hotelesSugeridos").html("")
}


// MOFIFICAR DATOS

modificarDatos = (pasajeros) => {
    for (const vuelo of vuelos) {
        vuelo.Pasajeros = pasajeros;
        vuelo.Total = (vuelo.Pasaje * pasajeros) * 1.21;
    }
}


// HTML LUGAR

htmlLugar = (_destino, eleccionDestino, descripcionLugar) => {
    let fotoLugar = eleccionDestino
    if (eleccionDestino == "New York") {
        fotoLugar = "ny"
    }
    $("#destino").append(`
            <section id= "destinoLugar">
                <img src="assets/images/Inicio/ciudades/${fotoLugar}.jpg" alt="" class="destinoImg">
                <div class="datos">
                    <h2>${eleccionDestino}</h2>
                    <p>${descripcionLugar.Descripción}</p>
                </div>
            </section>
        `)
}


// HTML HOTEL

htmlHotel = (_destino, eleccionHotel, descripcionLugar) => {
    let fotoHotel = eleccionHotel
    if (eleccionHotel == "Huanzhu Palace") {
        fotoHotel = "Huanzhu"
    }
    else if (eleccionHotel == "Marriot International") {
        fotoHotel = "Marriot"
    }
    else {
        fotoHotel = "Hilton"
    }
    $("#destino").append(`
            <section id= "destinoHotel">
                <div class="datos">
                    <h2>${eleccionHotel}</h2>
                    <p>${descripcionLugar.Descripción}</p>
                </div>
                <img src="assets/images/Inicio/ciudades/${fotoHotel}.jpg" alt="" class="destinoImg">
            </section>
        `)
}



// PROGRAMA PRINCIPAL

// SELECCIONES

$(".d").on("click", function() {
    const destinoSeleccionado = $(this).find(".cat-title").text();
    $("#inputDestino").attr("value", destinoSeleccionado);
});

$(".h").on("click", function() {
    const hotelSeleccionado = $(this).find(".cat-title").text();
    $("#inputHotel").attr("value", hotelSeleccionado);
});

// SUGERIDOS

$("#inputDestino").on("focus", () => agregarDSugeridos());
$("#inputHotel").on("focus", () => agregarHSugeridos());

$("#inputDestino").on("blur", () => removerDSugeridos());
$("#inputHotel").on("blur", () => removerHSugeridos());

// Navegar Destinos Sugeridos

$("#inputDestino").on("keydown", (e) => {
    if (e.keyCode == '38') {
        if (posicionDestinos == 0 || posicionDestinos === null){
            posicionDestinos = 5;
        }
        else posicionDestinos --;
        inputDestino.value = destinos[posicionDestinos];
    }
    else if (e.keyCode == '40') {
        if (posicionDestinos == 5 || posicionDestinos === null) {
            posicionDestinos = 0;
        }
        else posicionDestinos ++;
        inputDestino.value = destinos[posicionDestinos];
    }
})

// Navegar Hoteles Sugeridos

$("#inputHotel").on("keydown", (e) => {
    if (e.keyCode == '38') {
        if (posicionHoteles == 0 || posicionHoteles === null){
            posicionHoteles = 2;
        }
        else posicionHoteles --;
        inputHotel.value = hoteles[posicionHoteles];
    }
    else if (e.keyCode == '40') {
        if (posicionHoteles == 2 || posicionHoteles === null) {
            posicionHoteles = 0;
        }
        else posicionHoteles ++;
        inputHotel.value = hoteles[posicionHoteles];
    }
})


// BUSCADOR

$("form").on("submit", (e) => {
    e.preventDefault();
    eleccionDestino = e.target.children[0].value;
    eleccionHotel = e.target.children[2].value;
    // let pasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"))

    // MODIFICACION DE DATOS
    // modificarDatos(pasajeros)

    // BUSQUEDA DE DATOS
    // const buscarVuelo = vuelos.find(busqueda => busqueda.Lugar === eleccionDestino)
    const descripcionLugar = descripcionesLugar.find(busqueda => busqueda.Lugar === eleccionDestino)

    // HTML DESTINO
    $("#destino").html("")
    htmlLugar(destino, eleccionDestino, descripcionLugar)
    htmlHotel(destino, eleccionHotel, descripcionLugar)
})