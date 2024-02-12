let todolist =document.getElementById("taskinfo")
let tasklist=document.getElementById("tasklist")
document.getElementById("addbutton").onclick=function(){
    if(todolist.value.length==0){
        alert("Enter task details")
    }
    else{
        tasklist.innerHTML=tasklist.innerHTML+`
        <div class="task">
            <span id="work">${todolist.value}</span>
            <button class="del"><i class="fa-solid fa-trash"></i></button>
        </div>`
        let alltasks=document.querySelectorAll(".del")
        for(i=0;i<=alltasks.length;i++){
            alltasks[i].onclick=function(){
                this.parentNode.remove()
            }
        }
        todolist.value=""
    }
}