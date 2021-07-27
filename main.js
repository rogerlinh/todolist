let taskContainer = document.querySelector('.task-container');
let addTask = document.querySelector(".add-task");
let newTask = document.querySelector(".add-to-task");
let tasks = document.querySelector(".task");
let confirmDeleteTask = document.querySelector(".confirm-del-task");
let yesBtn = document.querySelector(".yes-btn");
let noBtn = document.querySelector(".no-btn");
let searchTask = document.querySelector(".search-task");
let searchTaskBtn = document.querySelector(".search-task-btn");
let searchResult = document.querySelector(".search-result");
var arrayTasks = [].slice.call(tasks.childNodes);
console.log(tasks.childNodes);

loadTasks();

async function loadTasks() {
  for (let i = 0; i < localStorage.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = localStorage.key(i);
    tasks.appendChild(li);
    arrayTasks.push(li);
  }
  console.log(arrayTasks);
}
arrayTasks.forEach((task) => {
  task.onclick = () => {
    confirmDeleteTask.style.display = "block";
    taskContainer.style.filter = 'blur(5px)';
    yesBtn.onclick = () => {
      window.localStorage.removeItem(task.innerHTML);
      task.style.display = "none";
      confirmDeleteTask.style.display = "none";
      taskContainer.style.filter = 'none';

      return
    };
    noBtn.onclick = () => {
      confirmDeleteTask.style.display = "none";
      taskContainer.style.filter = 'none';
      return
    };
  };
});

 function createNewTask () {
  let li = document.createElement("li");
  li.innerHTML = newTask.value;
  tasks.appendChild(li);
   localStorage.setItem(newTask.value, newTask.value);
   arrayTasks.push(li)
  newTask.value = "";
  return
}


addTask.onclick = () => {
  if (newTask.value != "") {
    createNewTask();
    console.log(arrayTasks);
    
  } else {
    alert("Bạn chưa nhập task");
  }
};



searchTaskBtn.onclick = () => {
    searchResult.innerHTML = "";
  tasks.style.display = "none";
  for (let i = 0; i < arrayTasks.length; i++) {
    let a = arrayTasks[i].innerHTML
      .toLowerCase()
      .includes(searchTask.value.toLowerCase());
    if (a) {
        let li = document.createElement("li");
      li.innerHTML = arrayTasks[i].innerHTML;
      searchResult.appendChild(li);
    }
  }
};

