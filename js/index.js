let contactos = [
    {nombre: 'Juanita Muñoz',
    email: 'jmuñoz@ejomail.com',
    telefono:'37843826446'
},
{
    nombre: 'pepe Rodriguez',
    email: 'pepeRodri@ejemplo.com',
    telefono: '32346234126'
}
];

let operacion = '';//registrar/modificar/eliminar 
let indexRegistroSeleccionado = null; 

function mostrarContactos(){
    const tbody = document
    .getElementById('contactosTable')
    .getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''
    for(let index in contactos){
        const contacto = contactos[index];
        const id = parseInt(index) + 1;
        let fila = '<tr>';

        fila += '    <td class="hiddenInMobile">'+id+'</td>';
        fila +=  '    <td>'+contacto.nombre+'</td>';
        fila +=  '    <td class="hiddenInMobile">'+contacto.email+'</td>'; 
        fila +=  '    <td class="hiddenInMobile">'+contacto.telefono+'</td>';
        fila +=  '    <td><button class="btnModificar" onclick="onClickModificar(' + id + ')">M</button></td>';
        fila +=  '    <td><button class="btnEliminar">E</button></td>';
        fila += '</tr>';
        tbody.innerHTML += fila;
    }

}
mostrarContactos();

document.getElementById('cerrarModalBtn').addEventListener('click', ()=>{
    document.getElementById('formularioModal')
    .classList.add('ocultarModal');

})
function cerrarModal(){
    document.getElementById('formularioModal')
        .classList.remove('ocultarModal');
    const formulario = document.forms['formContacto'];
    formulario.reset(); 
  

}

document.getElementById('registrarBtn').addEventListener('click', ()=>{
    document.getElementById('formularioModal')
    .classList.remove('ocultarModal');
    document.getElementById('tituloForm').innerText = 'Registrar';
    operacion = 'registrar';
    
});


document.getElementById('formularioContacto').addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const formulario = document.forms['formContacto'];
    const contacto = {
        nombre:document.forms['formContacto']['nombre'].value,
        email:document.forms['formContacto']['email'].value,
        telefono:document.forms['formContacto']['telefono'].value,
    };
    //const nombre = document.getElementById('nombre').value;
    //alert(nombre);
    if (operacion == 'registrar') {
        contactos.push(contacto);
    }else {
        contactos[indexRegistroSeleccionado] = contacto;
    }
    
    cerrarModal();
    mostrarContactos();
});

function onClickModificar(id) {
    document.getElementById('formularioModal')
    .classList.remove('ocultarModal');

    document.getElementById('tituloForm').innerText = 'Modificar';
    indexRegistroSeleccionado = id -1;
    const contacto = contactos[indexRegistroSeleccionado];
    const formulario = document.forms['formContacto'];
    formulario['nombre'].value = contacto.nombre;
    formulario['email'].value = contacto.email;
    formulario['telefono'].value = contacto.telefono;
    operacion = 'modificar';

}

/*function onClickEliminar(nombre del modal del botón eliminar){
     document.getElementById('formularioModal')
    .classList.remove('ocultarModal');

    indexRegistroSeleccionado = id -1;


}
function cerrar el nombre del modal (){
    document.getElementById('el nombre del modal')
    .classList.remove('ocultarModal');

    indexRegistroSeleccionado = null;

}

function onClickConfirmarEliminar (){
    contactos.splice(indexRegistroSeleccionado, 1);
    cerrar nombre modal();
    mostrarContactos();
}*/




