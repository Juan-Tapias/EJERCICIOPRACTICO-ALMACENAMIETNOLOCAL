let tareas = JSON.parse(localStorage.getItem("tareas")) || {};

function agregarTareaVista(){
    const html =`
        <h2>Agregar Tarea</h2>
        <div class="productos">
            <label>Tarea: 
            <input type="text" id="tarea">
            </label> <br><br>
            <button onclick="agregarTarea()" id="tarea">Guardar</button>
        </div>
    `;
    document.getElementById("contenedorTareas").innerHTML = html;
}
function agregarTarea(){
    const input = document.getElementById("tarea").value.trim()

    if(input === ""){
        alert("Debes escribir una tarea")
        return;
    }else{
        let tareasAgregadas={
            nombre:input,
            estado:false
        }
        tareas[Object.keys(tareas).length] = tareasAgregadas;
        localStorage.setItem("tareas", JSON.stringify(tareas));
        alert("Tarea agregada con exito ✅", input)
    }
    
}
function vistaTareas(){
    let tareas = JSON.parse(localStorage.getItem("tareas")) || {};
    let html =`
        <table>
            <tr>
                <th>N</th>
                <th>Tarea</th>
                <th>Estado</th>
            </tr>    
    `;
    for(let i in tareas){
        let completa = tareas[i].estado ? "✅" : "⏳";
        html += `
            <tr>
                <td>${i}</td>
                <td>${tareas[i].nombre}</td>
                <td>${completa}</td>
            </tr>`;
    }
    html +=`</table>`;
    document.getElementById("contenedorTareas").innerHTML = html;
}
function marcarVistar(){
    let tareas = JSON.parse(localStorage.getItem("tareas")) || {};
    let html =`
    <table>
        <tr>
            <th>N</th>
            <th>Tarea</th>
            <th>Estado</th>
            <th>Completa¿?</th>
        </tr>    
    `;
    for(let i in tareas){
        let completa = tareas[i].estado ? "✅" : "⏳";
        html += `
            <tr>
                <td>${i}</td>
                <td>${tareas[i].nombre}</td>
                <td>${completa}</td>
                <td><input type="checkbox" onchange="tareaCompletada(${i})" ${tareas[i].estado ? "checked" : ""}></td>
            </tr>`;
    }
    html +=`</table>`;
    document.getElementById("contenedorTareas").innerHTML = html;
}
function tareaCompletada(id){
    let tareas = JSON.parse(localStorage.getItem("tareas")) || {};
    if (tareas[id]){
        tareas[id].estado = !tareas[id].estado;
        localStorage.setItem("tareas", JSON.stringify(tareas));
        alert(`📌 Tarea marcada como ${tareas[id].estado ?  "completada ✅" : "pendiente ⏳" }`);
        marcarVistar();
    }
}
function vistaEliminarTarea(){
    let tareas = JSON.parse(localStorage.getItem("tareas")) || {};
    let html =`
    <table>
        <tr>
            <th>N</th>
            <th>Tarea</th>
            <th>Estado</th>
            <th>Completa¿?</th>
            <th>Eliminar¿?</th>
        </tr>    
    `;
    for(let i in tareas){
        let completa = tareas[i].estado ? "✅" : "⏳";
        html += `
            <tr>
                <td>${i}</td>
                <td>${tareas[i].nombre}</td>
                <td>${completa}</td>
                <td><input type="checkbox" onchange="tareaCompletada(${i})" ${tareas[i].estado ? "checked" : ""}></td>
                <td><input type="checkbox" onchange="eliminarTarea(${i})"}></td>
            </tr>`;
    }
    html +=`</table>`;
    document.getElementById("contenedorTareas").innerHTML = html;
}
function eliminarTarea(id){
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || {};
    
    if (tareasGuardadas[id]){
        delete tareasGuardadas[id]
        localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
        alert(`📌 Tarea eliminada`);
        vistaEliminarTarea();  
    }
}
function salir(){
    const html =""
    document.getElementById("contenedorTareas").innerHTML = html;
}