// OJBETO VUELOS

const vuelos = [{Lugar: "New York", Pasaje: 1095, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Madrid", Pasaje: 1500, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Miami", Pasaje: 950, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Londres", Pasaje: 1750, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Aruba", Pasaje: 800, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Tokio", Pasaje: 2200, Pasajeros: 1, Recargo: "21%", Total: 0}
]


// ENTRADA DE DATOS

alert(`Bienvenido! Inicie su consulta`);
let eleccion = prompt("Ingrese su destino de interés");
let pasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"))


// MODIFICACION DE DATOS

const cantidad = vuelos.map(cantidad => cantidad.Pasajeros = pasajeros)
const valorTotal = vuelos.map(valorTotal => valorTotal.Total = (valorTotal.Pasaje * pasajeros) * 1.21)
const buscarVuelo = vuelos.find(busqueda => busqueda.Lugar === eleccion)

console.log(buscarVuelo);


// MENSAJES EN STORAGE

localStorage.setItem(`Bienvenida`, `Hola Pasajeros!`)

localStorage.setItem("Vuelo Seleccionado", JSON.stringify(buscarVuelo))

for (const vuelo of vuelos) {
    sessionStorage.setItem(vuelo.Lugar, vuelo.Total)
}


// HTML DESTINO ELEGIDO

let foto = eleccion

if (eleccion == "New York") {
    foto = "ny"
}

const main = document.getElementsByTagName("main")[0]

let section = document.createElement("section");
section.id = "destino"
section.innerHTML =    `<img src="assets/images/Inicio/ciudades/${foto}.jpg" alt="">
                        <div id="datos">
                            <h2>${eleccion}</h2>
                            <div id="listas">
                                <ul id="lista">
                                    <li>Pasaje</li>
                                    <li>Impuestos</li>
                                    <li>Total</li>
                                </ul>
                                <ul id="lista2">
                                    <li>${buscarVuelo.Pasaje} USD</li>
                                    <li>21%</li>
                                    <li>${buscarVuelo.Total} USD</li>
                                </ul>
                            </div>
                        </div>`;
main.appendChild(section);