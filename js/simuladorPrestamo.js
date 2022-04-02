

class SimuladorPrestamo {


    constructor(sueldo, sueldoDebitar, cuotas) {

        this.sueldo = parseFloat(sueldo);

        this.sueldoDebitar = parseFloat(sueldoDebitar);

        this.cuotas = parseInt(cuotas);

        
    }

    cotizarPrestamo = () => {

        const prestamoNeto = (this.sueldo * this.sueldoDebitar) * this.cuotas;
        return (prestamoNeto);
       
    
    }

}



 //nombre = prompt("Ingrese su Nombre");

// apellido = prompt("Ingrese su Apellido")

// sueldo = parseFloat(prompt("Ingrese su sueldo neto mensual:"));

//cuotas = parseInt(prompt("A pagar en: cuotas\n 3 \n 6 \n 9 \n 12"))

// const prestamo1 = new SimuladorPrestamo (sueldo, sueldoDebitar, cuotas);

// prestamo1.cotizarPrestamo ();

// prestamoNeto=prestamo1.cotizarPrestamo();







