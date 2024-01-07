sessionStorage.setItem(`Bienvenida`, `Hola Pasajeros!`)

// OJBETOS

const URL_Estadias = "../../destinos.json"
const URL_Descripciones = "../../descripciones.json"



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
    $.get(URL_Estadias, (respuesta) => {
        const buscarEstadia = respuesta.find(busqueda => busqueda.Lugar === eleccionDestino)
        $("#valor").text("US$ " + ((buscarEstadia.Estadia * dias) * pasajeros)* 1.21)
    })
}



// HTML LUGAR

htmlLugar = (eleccionDestino, descripcion) => {
    let fotoLugar = eleccionDestino
    if (eleccionDestino == "New York") {
        fotoLugar = "ny"
    }
    $("#destino").append(`
            <section id= "destinoLugar">
                <div class="background">
                    <img src="assets/images/Inicio/ciudades/${fotoLugar}.jpg" alt="" class="destinoImg">
                    <div class="datos">
                        <h3>${eleccionDestino}</h3>
                        <p>${descripcion.Descripción}</p>
                    </div>
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
            <div class="background">
                <div class="datos">
                    <h3>${eleccionHotel}</h3>
                    <div id="caracteristicas">
                        <i class="fa-solid fa-water-ladder"></i>
                        <i class="fa-solid fa-wifi"></i>
                        <i class="fa-solid fa-dumbbell"></i>
                        <i class="fa-solid fa-spa"></i>
                        <i class="fa-solid fa-martini-glass-citrus"></i>
                    </div>
                    <a><button class="inputs boton">Consultar Valores</button></a>
                </div>
                <img src="assets/images/Inicio/ciudades/${fotoHotel}.jpg" alt="" class="destinoImg">
            </div>
        </section>
    `)
    $("button").on("click", () => {
        $("#calculoPrecios").remove()
        htmlValores(eleccionDestino, eleccionHotel)
    })
}



// HTML VALORES

htmlValores = (eleccionDestino, eleccionHotel) => {
    $.get(URL_Estadias, (respuesta) => {
        const buscarEstadia = respuesta.find(busqueda => busqueda.Lugar === eleccionDestino);
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
                        <span id="valor">US$ ${buscarEstadia.Total}</span>
                    </div>
                </div>
            </section>
            `)
        valores()
    })
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
    $.get(URL_Descripciones, (respuesta) => {
        const descripcion = respuesta.find(busqueda => busqueda.Lugar === eleccionDestino)
        // HTML DESTINO
        $("#destino").html("")
        htmlLugar(eleccionDestino, descripcion)
        htmlHotel(eleccionHotel)
        const destinoLugar = document.getElementById("destinoLugar");
        destinoLugar.scrollIntoView({ behavior: "smooth" });
    })
})