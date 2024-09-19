// Función para mostrar el formulario al presionar el botón "Personalizar"
function mostrarFormulario() 
{
    document.getElementById("formulario").style.display = "block";
}

// Función para actualizar la tarjeta con los datos ingresados por el usuario
function actualizarTarjeta() 
{
    const nombre = document.getElementById("txtnombre").value;
    const puesto = document.getElementById("txtpuesto").value;

    if (nombre && puesto) 
    {
        document.getElementById("mensaje").textContent = `${nombre} - ${puesto}`;
    } 
    else 
    {
        alert("Por favor, complete ambos campos.");
    }
}
