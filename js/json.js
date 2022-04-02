const guardoDatosJSON = () => {
    datosCliente = {
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        prestamoNeto: parseFloat(prestamoNeto),
        cuotas: parseInt(cuotas),
        ImporteCuotas: parseFloat(ImporteCuotas)
    }
    datos.push(datosCliente)
    localStorage.setItem("datosDelCliente", JSON.stringify(datos));
    console.info("Se almaceno correctamente json");
}


const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
//agregue la libreria sweet alert para la confirmacion antes de borrar los datos
    const resp =Swal.fire({
        title: '¿Realmente desea eliminar los datos almacenados?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'grey',
        cancelButtonColor: '#ad2424',
        confirmButtonText: 'Si, borrar todo!'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            formulario.reset();
          Swal.fire(
            'Borrado!',
            'Tus datos han sido borrado.',
            'success'
            
            
          )
        }
      })

})

