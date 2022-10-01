let tasks= JSON.parse(tasksJson);

function updateHTML (){
  
for(let task of tasks){
    document.getElementById("mainbox").innerHTML += `
    <div class="card shadow" style="width: 18rem;">
    <div class="d-flex justify-content-between ">
    <button type="button" class="btn btn-info btn-sm">Task</button>
    <div>
    <img src="/images/mark.png" alt="">
    <img src="/images/menu-vertical.png" alt="">
    </div>
    </div>

  <img src="${task.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${task.taskName}</h5>
    <p class="card-text">${task.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <div class="d-flex">
    <div> <img class="importancebtn" src="/images/importance.png" ></div>
    <p>Priority level:</p>
    <div ><p id="import" class="imptask">${task.importance}</p></div>
    </div>
    <div class="d-flex">
    <div> <img src="/images/deadline.png" ></div>
    <div><p>Deadline: ${task.deadline}</p></div>
    </div>
    </li>
  </ul>
  <div class="d-flex justify-content-end gap-2 p-3">
  <input class="bg-danger" type="submit" value="Delete">
  <input class="bg-success" type="submit" value="Done">
  </div>
</div>
    `
}
}
updateHTML()
addEvent()



function importance(index){
    if(tasks[index].importance !=5 ){
    tasks[index].importance++
    document.getElementsByClassName("imptask")[index].innerHTML=tasks[index].importance
   

} 


}

function addEvent (){
let importantbtns = document.getElementsByClassName("importancebtn")

for(let i=0; i<importantbtns.length; i++){
    importantbtns[i].addEventListener("click",function(){
       importance(i)
       
    
        
    })
    
}
}

document.getElementById("sort").addEventListener("click",sortByImportance)

function sortByImportance (){
    tasks.sort((a,b)=> a.importance-b.importance)
    document.getElementById("mainbox").innerHTML=""
    updateHTML()
    addEvent()

}

