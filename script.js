function add(){
    const taskip=document.getElementById("new");
    const task=taskip.value.trim();

    if(task==""){
        alert("enter a task.");
        return;
    }
    
    const li=document.createElement("li");
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("task-checkbox");

    const taskText=document.createElement("span");
    taskText.textContent=task;
    taskText.classList.add("task-text");

    const editButton=document.createElement("button");
    editButton.textContent="Edit";
    editButton.classList.add("task-btn");

    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.classList.add("task-btn","delete-btn");


    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById("task-list").appendChild(li);
    taskip.value="";
    
    checkbox.addEventListener('change',function(){
        if(checkbox.checked){
            taskText.classList.add("completed");
        } else{
            taskText.classList.remove("completed");

        }
        });


        editButton.addEventListener("click",function(){
            const newTask=prompt("Edit your task:",taskText.textContent);
            if (newTask!==null&&newTask.trim() !== "") {
                taskText.textContent=newTask.trim();
            }
        });

        deleteButton.addEventListener("click",function(){
            li.remove();
        });
        

    }
   
