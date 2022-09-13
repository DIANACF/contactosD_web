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

function mostrarContactos(){
    const tbody = document
    .getElementById('contactosTable')
    .getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''
    for(let index in contactos){
        const contacto = contactos[index];
        const id = parseInt(index) + 1;
        let fila = '<tr>';

        fila += '    <td>'+id+'</td>';
        fila +=  '    <td>'+contacto.nombre+'</td>';
        fila +=  '    <td>'+contacto.email+'</td>'; 
        fila +=  '    <td>'+contacto.telefono+'</td>';
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
    cerrarModal();
});


document.getElementById('formularioContacto').addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const contacto = {
        nombre:document.forms['formContacto']['nombre'].value,
        email:document.forms['formContacto']['email'].value,
        telefono:document.forms['formContacto']['telefono'].value,
    };
    //const nombre = document.getElementById('nombre').value;
    //alert(nombre);
    contactos.push(contacto);
    cerrarModal();
    mostrarContactos();
});
