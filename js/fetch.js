
botonEnviarDatos.addEventListener("click", () => {

    datos = JSON.parse(localStorage.getItem("datosDelCliente"))

    for (datosCliente of datos) {

        nombre = datosCliente.nombre
        apellido = datosCliente.apellido
        email = datosCliente.email
        prestamoNeto = datosCliente.prestamoNeto
        cuotas = datosCliente.cuotas

    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(datosCliente),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        



        //peticionEnviada.innerHTML = "En breve recibira un email del banco"

    // fetch('https://matiascoronel1312.github.io/OperadoresAvanzadosJS/datos.json', {
    //     mode: 'no-cors',
    //     method: 'POST',
    //     body: JSON.stringify(datosCliente),
    //     //headers: {'Content-type': 'application/json',  },
    // })
    //     .then( (response)=> {

    //         if (response.ok) {
    //             return response.text()
    //         } else {
    //             throw "Error en la llamada ajax";
    //         }

    //     })
    //     .then((text) => {
    //         console.log(text);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });


})