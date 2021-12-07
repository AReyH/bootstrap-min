var jugadores = []
const guardar = () => {
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let text_box = document.getElementById('exampleFormControlTextarea1').value;
    let j = {};
    j.id = id;
    j.nombre = nombre;
    j.number = number;
    j.email = email;
    j.text_box = text_box;

    jugadores.push(j);

    console.log(id,nombre,number,email,text_box);
}

const listar = () => {
    let listado = document.getElementById('cuerpotabla');
    listado.innerHTML = "";
    for (const a of jugadores) {
        listado.innerHTML += `<tr>
        <td> ${a.id}</td>
        <td> ${a.nombre}</td>
        <td> ${a.number}</td>
        <td> ${a.email}</td>`
    }
}