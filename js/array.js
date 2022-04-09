class Prestamo {
    constructor(nombre, apellido, prestamoNeto, cuotas) {
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.prestamoNeto = parseFloat(prestamoNeto);
        this.cuotas = parseInt(cuotas);
        
    }

    InteresBanco() {
        //segun cantidad de cuotas el interes aumenta  (150% en 3cuotas o 300% en 12 cuotas) 
        //------------agregue operador logico AND----------------------
        this.cuotas == 3 && (interes = 1.5);
        this.cuotas ==6  && (interes = 2);
        this.cuotas ==9 && (interes = 2.5);
        this.cuotas == 12 && (interes = 3);
        
        this.totalAPagar = this.prestamoNeto * interes;       
    }
}

let inputNombre = document.getElementById("nombre")

inputNombre.onkeyup = (event) => {
    nombre = event.target.value;
    console.clear();
    console.log(nombre);

}

let inputApellido = document.getElementById("apellido")

inputApellido.onkeyup = (event) => {
    apellido = event.target.value;
    console.clear();
    console.log(apellido);
}


inputEmail.onkeyup = (event) => {
    email = event.target.value;
    console.clear();
    console.log(email);
}
let inputSueldo = document.getElementById("sueldo")

inputSueldo.onkeyup = (event) => {
    sueldo = event.target.value;
    console.clear();
    console.log(parseFloat(sueldo));
    return sueldo;
}

let inputCuotas = document.getElementById("select")
inputCuotas.onchange = (event) => {
    cuotas = event.target.value;
    console.log(parseInt(cuotas));

}


//debugger
boton.addEventListener("click", () => {

//------------Operador Ternario-------------------------
    FaltanCargarDatos() ? FaltanDatos() : DatosCompletos();   
    
})

const botonSimular = document.getElementById("botonSimular");
botonSimular.addEventListener("click", () => {


    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sus datos se estan procesando',
        showConfirmButton: false,
        timer: 2000
    })  

    const prestamo1 = new SimuladorPrestamo(sueldo, sueldoDebitar, cuotas);

    prestamo1.cotizarPrestamo();

    prestamoNeto = prestamo1.cotizarPrestamo();
    const prestamos = [];

    prestamos.push(new Prestamo(nombre, apellido, prestamoNeto, cuotas));


    for (const prestamo of prestamos) {
        prestamo.InteresBanco();
        
    }

    for (let cliente = 0; cliente < prestamos.length; cliente++) {
    console.log(prestamos[cliente]);      
    }
    console.log(prestamos[0].totalAPagar)
    // const clientes = prestamos.map((el) => el.nombre);
    // console.log(clientes); //y una lista por nombre de clientes;

    setTimeout(()=>{   
        TotalPrestamo.innerHTML = '<h3>Monto total del prestamo permitido: $' + prestamoNeto + '</h3>';
        const buttonDetalle = document.querySelector("#buttonDetalle");
        buttonDetalle.innerHTML=  '<button id="botonDetalle"><a href="./assets/pages/detalles.html">Detalle</a></button>';
    },2500)
        ImporteCuotas= prestamos[0].totalAPagar/cuotas;
    
    console.log(ImporteCuotas)
    // guardoDatos();
    guardoDatosJSON();
      //mostrarInfoDeUsuario (prestamos);
      //---------------spread--------------
    //   const Cliente = {
    //     ...prestamos[0] 
    // }
    //   console.log (Cliente)
})

const FaltanCargarDatos = () => {
    return (nombre.value=="") || (apellido.value=="");
}
    
const FaltanDatos = () => {
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Complete todos sus datos',
        showConfirmButton: false,
        timer: 2500
    })
}
const DatosCompletos = () => {
    saludo = document.querySelector("#saludo");
    saludo.innerHTML = '<h2>Hola ' + nombre + " " + apellido + ' , Bienvenido!</h2>';
}



//-----------------desestructuracion------------------------

const mostrarInfoDeUsuario = (prestamos) =>{
    const buscar = prompt ("cliente a buscar");
    const resultado = prestamos.find(u=>u.nombre==buscar.toUpperCase());
    const {nombre, apellido} = resultado;
    console.log ('Cliente', nombre , apellido);
}





// const guardoDatos = () => {
    

//     localStorage.setItem("Nombre",nombre);
//     localStorage.setItem("Apellido",apellido);
//     localStorage.setItem("PrestamoNeto",prestamoNeto);
//     localStorage.setItem("Cuotas",cuotas);
//     localStorage.setItem("ImporteCuotas",ImporteCuotas);
//     console.info("Se almaceno correctamente");
    
// }






