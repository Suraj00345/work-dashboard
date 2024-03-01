const form = document.getElementById("h-container");
const input = document.getElementById("input-box");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const value = input.value;
    if(!value) {
        alert("Please enter something..");
        return;
    };

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.draggable = 'true';
   newTask.innerHTML =`
   <p >${input.value}</p>
   `;

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
      });
    
      newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging");
      });

    todoLane.appendChild(newTask);

    input.value ="";
    
});


