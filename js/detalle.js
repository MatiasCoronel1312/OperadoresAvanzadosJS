let lista = "";
let aviso ="";
const tablaListado = document.querySelector("#listado")
const avisos = document.querySelector("#aviso")


const cargoArrayDeCursos = () => {
    
    
    if (localStorage.getItem("datosDelCliente") != null) {
        datos = JSON.parse(localStorage.getItem("datosDelCliente"))

        console.log("llego hasta aca")


        for (dato of datos) {
            lista += `<tr>
                          <td class="align-left">$${dato.prestamoNeto}</th>
                          <td class="align-right">${dato.cuotas}</th>
                          <td class="align-right">$${dato.ImporteCuotas}</th>
                      </tr>`;
             aviso += '<h2>' + dato.nombre + " " + dato.apellido + ' , este es el prestamo que te podemos ofrecer</h2>';
        }
        tablaListado.innerHTML = lista;
        avisos.innerHTML = aviso;
    }
}

cargoArrayDeCursos()