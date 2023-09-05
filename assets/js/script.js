const destinos = [{Lugar: "New York", Pasaje: 1000000, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Madrid", Pasaje: 750000, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Miami", Pasaje: 600000, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Londres", Pasaje: 800000, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Aruba", Pasaje: 500000, Pasajeros: 1, Recargo: "21%", Total: 0},
                {Lugar: "Tokio", Pasaje: 600000, Pasajeros: 1, Recargo: "21%", Total: 0}
]



alert(`Bienvenido! Inicie su consulta`);
let eleccion = prompt("Ingrese su destino de interés");
let pasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"))


const cantidad = destinos.map(cantidad => cantidad.Pasajeros = pasajeros)
const valorTotal = destinos.map(valorTotal => valorTotal.Total = (valorTotal.Pasaje * pasajeros) * 1.21)
const buscarDestino = destinos.find(busqueda => busqueda.Lugar === eleccion)

console.log(buscarDestino);



localStorage.setItem(`Bienvenida`, `Hola Pasajeros!`)


localStorage.setItem("Paquete Seleccionado", JSON.stringify(buscarDestino));


for (const destino of destinos) {
    sessionStorage.setItem(destino.Lugar, destino.Total)
};

localStorage.setItem(`Despedida`, `Buen Viaje!`)



