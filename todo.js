//Task status        
        let total = document.getElementById("tot")
        let completed = document.getElementById("com")
        let yet = document.getElementById("yet")
        let c=0; let tick =0;
//add task
      let tasks = document.getElementById("tasks")
     document.getElementById("add").onclick=function(){
        let taskname = document.getElementById("task").value;
        if(taskname==""){
            alert("Enter task");
        }
        else{
        c+=1
        let box = document.createElement("input")
        box.type="checkbox"
        box.style.display="inline-block"
        tasks.appendChild(box)

        let li=document.createElement("li")
        li.style.margin="0px 5px"
        li.innerText = taskname;
        li.style.fontSize="20px"
        li.style.fontWeight="bold"
        li.style.display="inline-block"
        tasks.appendChild(li)

        //deadline 
      let dbtn = document.createElement("button")
      dbtn.innerText= "Set Deadline"
      tasks.appendChild(dbtn)
      let deadline = document.createElement("input")
      dbtn.onclick=function(){
      deadline.type = "datetime-local"
      dbtn.replaceWith(deadline)
      }
     

        //total tasks
        total.innerText=c;

        let hr = document.createElement("hr")
        hr.style.width="100%"
        hr.style.backgroundColor="black"
        hr.style.height="2px"
        tasks.appendChild(hr)

        let br = document.createElement("br")
        tasks.appendChild(br) 
        
        
      box.onclick=function(){
       li.style.textDecoration="line-through"
        //popup
        // setInterval(
        //   ()=>{
        // let pop = document.createElement("div")
        // pop.innerText="Congradulations, Your task is completed"
        // pop.classList.add("popup")
        // tasks.appendChild(pop)
        //   },10000
        // )
       
        if(box.checked==false){
        li.style.textDecoration="none";
        tick-=1
        completed.innerText = tick
        yet.innerText=c-tick;
      }
      else{
        tick+=1
          //tasks completed
        completed.innerText = tick;
        yet.innerText=c-tick;
      }  
      }
      
        let e = document.createElement("button")
        e.innerText="X"
        e.style.margin="20px"
        e.style.background="yellow"
        e.style.cursor="pointer"
        e.style.border="2px solid yellow"
        li.appendChild(e);

        e.onclick=function(){
            li.remove();
            box.remove();
            br.remove();
            hr.remove();
            dbtn.remove();
            deadline.remove();
            c-=1;
        total.innerText=c;
        if(tick==0){
            completed.innerText=tick 
        }
        else{
        tick-=1;
       completed.innerText = tick;
        }
        yet.innerText =c-tick;
        }
        }
      
        yet.innerText = c -tick;
      
    }
  document.getElementById("reset").onclick= function(){
  document.getElementById("task").value=""
  tasks.innerHTML=""
  c=0; tick=0;
  total.innerText=0;
  completed.innerText = 0;
  yet.innerText=0;
}