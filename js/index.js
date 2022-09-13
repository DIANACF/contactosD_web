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
