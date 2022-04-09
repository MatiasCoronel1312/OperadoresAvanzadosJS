
botonEnviarDatos.addEventListener("click", () => {

    datos = JSON.parse(localStorage.getItem("datosDelCliente"))

        for (datosCliente of datos) {

            nombre= datosCliente.nombre
            apellido= datosCliente.apellido
            email= datosCliente.email
            prestamoNeto= datosCliente.prestamoNeto
            cuotas= datosCliente.cuotas
            
        }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(datosCliente),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
    


fetch('file:///D:/JavaScript/Optimizacion/datos.json', {
        method: 'POST',
        body: JSON.stringify(datosCliente),
       // headers: {'Content-type': 'application/json; charset=UTF-8',  },
    })
    .then(function(response) {

        if(response.ok) {
            return response.text()
        } else {
            throw "Error en la llamada Ajax";
        }
     
     })
     .then(function(texto) {
        console.log(texto);
     })
     .catch(function(err) {
        console.log(err);
     });


})