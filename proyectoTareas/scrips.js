const tasks = [];


//AGREGAR UNA TAREA.
const addTask = () =>{
    const tastk = prompt('Escriba la Tarea a agregar');
    const container = document.getElementById('Tarea');
    const newTask = document.createElement('li');
    const content = document.createTextNode(tastk);
    newTask.appendChild(content);
    container.appendChild(newTask);
};


//ELIMINAR LA ATERIOR TAREA.
const CONTAINER_NAME = 'Tarea';

const removeTask = () =>{
    const el = document.getElementById(`${CONTAINER_NAME}`);
    console.log(el);
    el.removeChild(el.lastChild);
};

//ELIMINAR TAREA PERSONALIZADA.
const removeNumberTask = () =>{
    const taskNumberRemove = parseInt( prompt('Ingrese el numero a eliminar.'))-1;
    if(!Number.isInteger(taskNumberRemove)) return;
    const el = document.getElementById(`${CONTAINER_NAME}`);
    let children = el.children;
    console.log(children);
    el.removeChild(children[taskNumberRemove]);

};

