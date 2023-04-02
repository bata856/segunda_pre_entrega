
//Array de productos//
const productos = 
[
    {
        id: 1,
        nombre: "Trio",
        precio: 2000,
        disponibilidad: true
    },

    {
        id: 2,
        nombre: "Terepín",
        precio: 3000,
        disponibilidad: true
    },

    {
        id: 3,
        nombre: "Riera",
        precio: 4000,
        disponibilidad: true
    },
    
    {
        id: 4,
        nombre: "Satur",
        precio: 5000,
        disponibilidad: true
    },
    

];

//Array vacio para que el cliente pushee las compras

let carrito = [];

let seleccion = prompt ("¿Desea seleccionar alguno de nuestros productos? , Responda  \n si  o  no");

while (seleccion != "si"  && seleccion != "no" ) 
{

    seleccion = prompt ("Por favor indique una de las opciones correctas  \n si o no")
}


if (seleccion == "si") 
{
    alert ("A continuación nuestro listado completo de productos")
    let listaDeProductos = productos.map
    (
        (producto) =>producto.id + " " + producto.nombre + "     $........" + producto.precio
    );
    alert(listaDeProductos.join ("\n"));
    } 
    else if (seleccion == "no") 
    { 
    alert ("Gracias por elegirnos!!!")
};

while (seleccion != "no") 
{
    let producto = prompt("Agregue otro producto al carrito");
    let precio = 0
    
    if(producto == "Trio" || producto == "Terepin" || producto == "Riera" || producto == "Satur" )
    {
        switch (producto)
        {
            case "Trio":
            precio = 2000;
            break;

            case "Terepin":
            precio = 3000;
            break;

            case "Riera":
            precio = 4000;
            break;

            case "Satur":
            precio = 5000;
            break;
            
            default:   
            break;

        }

        let cajas = parseInt (prompt ("¿Cuantas cajas desea comprar?"));

        carrito.push({producto, cajas, precio})



    } else 
        {

            alert ("Producto inexistente");

        }

        seleccion = prompt ("¿Desea continuar comprando?");
        

        while (seleccion == "no") 
        {
            alert ("Gracias por elegirnos!!");
            carrito.forEach((carritoFinal) => {
                console.log (`producto: ${carritoFinal.producto}, cajas: ${carritoFinal.cajas} total a pagar por item $... : ${carritoFinal.cajas *carritoFinal.precio}`)
            })
            break;

        }
    
}


const totalCompra = carrito.reduce((acumulador , elemento) => acumulador + elemento.precio * elemento.cajas, 0);
alert (`El total de su compra es de $.....${totalCompra}`);
alert (`El total de su compra con IVA es de $.....${totalCompra *1.21}`);




