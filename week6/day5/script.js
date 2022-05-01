const tasks = JSON.parse(localStorage.getItem("tasks")) || []

let taskForm = document.getElementsByTagName('input')
document.forms[0].addEventListener('submit', getInput) 

function getInput (e) {
    e.preventDefault()
    let name = taskForm[0].value
    let description = taskForm[1].value
    let start = taskForm[2].value
    let end = taskForm[3].value
    let done = false
    const task = new toObj(name,description,start,end,done);
    tasks.push(task);
    
    localStorage.clear();
    localStorage.setItem("tasks", JSON.stringify(tasks));  
    window.location.replace("list.html");
    
}

class toObj {
    constructor (name,description,start,end,done) {
       this.name = name;
       this.description = description;
       this.start = start;
       this.end = end;
       this.done = done;
   }
}

