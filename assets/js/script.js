sessionStorage.setItem(`Bienvenida`, `Hola Pasajeros!`)

// OJBETOS

const vuelos = [{ID: "v1", Lugar: "New York", Estadia: 1095, Dias: 1, Pasajeros: 1, Recargo: "21%", Total: 1095 *1.21},
                {ID: "v2", Lugar: "Madrid", Estadia: 1500, Dias: 1, Pasajeros: 1, Recargo: "21%", Total: 1500*1.21},
                {ID: "v3", Lugar: "Miami", Estadia: 950, Dias: 1, Pasajeros: 1, Recargo: "21%", Total: 950*1.21},
                {ID: "v4", Lugar: "Londres", Estadia: 1750, Dias: 1, Pasajeros: 1, Recargo: "21%", Total: 1750*1.21},
                {ID: "v5", Lugar: "Aruba", Estadia: 800, Dias: 1, Pasajeros: 1, Recargo: "21%", Total: 800*1.21},
                {ID: "v6", Lugar: "Tokio", Estadia: 1600, Dias: 1, Pasajeros: 1, Recargo: "21%", Total: 1600*1.21}
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

modificarDatos = (pasajeros, dias) => {
    const buscarVuelo = vuelos.find(busqueda => busqueda.Lugar === eleccionDestino)
    $("#valor").text("US$ " + ((buscarVuelo.Estadia * dias) * pasajeros)* 1.21)
}



// HTML LUGAR

htmlLugar = (eleccionDestino, descripcionLugar) => {
    let fotoLugar = eleccionDestino
    if (eleccionDestino == "New York") {
        fotoLugar = "ny"
    }
    $("#destino").append(`
            <section id= "destinoLugar">
                <img src="assets/images/Inicio/ciudades/${fotoLugar}.jpg" alt="" class="destinoImg">
                <div class="datos">
                    <h3>${eleccionDestino}</h3>
                    <p>${descripcionLugar.Descripción}</p>
                </div>
            </section>
        `)
}



// HTML HOTEL

htmlHotel = (eleccionHotel) => {
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
                <h3>${eleccionHotel}</h3>
                <div id="caracteristicas">
                    <i class="fa-solid fa-water-ladder"></i>
                    <i class="fa-solid fa-wifi"></i>
                    <i class="fa-solid fa-dumbbell"></i>
                    <i class="fa-solid fa-spa"></i>
                    <i class="fa-solid fa-martini-glass-citrus"></i>
                </div>
                <a href="#footer"><button class="inputs boton">Consultar Valores</button></a>
            </div>
            <img src="assets/images/Inicio/ciudades/${fotoHotel}.jpg" alt="" class="destinoImg">
        </section>
    `)
    $("button").on("click", () => {
        $("#calculoPrecios").remove()
        htmlValores(eleccionDestino, eleccionHotel)
    })
}



// HTML VALORES

htmlValores = (eleccionDestino, eleccionHotel) => {
    const buscarVuelo = vuelos.find(busqueda => busqueda.Lugar === eleccionDestino)
    $("#destino").append(`
        <section id= "calculoPrecios">
            <img src="assets/images/Inicio/estrellas.png" alt="" id="estrellas">
            <h2>${eleccionHotel}, ${eleccionDestino}</h2>
            <div id="calculo">
                <div class="calculo">
                    <button class="botones" id="restarE">-</button>
                    <span id="valorE">1</span>
                    <button class="botones" id="sumarE">+</button>
                </div>
                <div class="calculo">
                    <button class="botones" id="restarP">-</button>
                    <span id="valorP">1</span>
                    <button class="botones" id="sumarP">+</button>
                </div>
                <div class="calculo">
                    <span id="valor">US$ ${buscarVuelo.Total}</span>
                </div>
            </div>
        </section>
        `)
    valores()
}



// VALOR ESTADIA

valores = () => {
    let valorActualE = 1
    $("#sumarE").on("click", function() {
        valorActualE++;
        if (valorActualE > 10) {
            valorActualE = 10;
        }
        actualizarResultadoE();
    });
    $("#restarE").on("click", function() {
        valorActualE--;
        if (valorActualE < 1) {
            valorActualE = 1;
        }
        actualizarResultadoE();
    });
    let valorActualP = 1
    $("#sumarP").on("click", function() {
        valorActualP++;
        if (valorActualP > 5) {
            valorActualP = 5;
        }
        actualizarResultadoP();
    });
    $("#restarP").on("click", function() {
        valorActualP--;
        if (valorActualP < 1) {
            valorActualP = 1;
        }
        actualizarResultadoP();
    });
    actualizarResultadoE = () => {
        $("#valorE").text(valorActualE);
        modificarDatos(valorActualP, valorActualE)
    }
    actualizarResultadoP = () => {
        $("#valorP").text(valorActualP);
        modificarDatos(valorActualP, valorActualE)
    }
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
    // BUSQUEDA DE DATOS
    const descripcionLugar = descripcionesLugar.find(busqueda => busqueda.Lugar === eleccionDestino)
    // HTML DESTINO
    $("#destino").html("")
    htmlLugar(eleccionDestino, descripcionLugar)
    htmlHotel(eleccionHotel, descripcionLugar)
    const destinoLugar = document.getElementById("destinoLugar");
    destinoLugar.scrollIntoView({ behavior: "smooth" });
})