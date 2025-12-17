function openFeaturs() {
    var allElem = document.querySelectorAll('.elem')
var fullElemPage = document.querySelectorAll('.fullElem')
var fullElemPagebackbtn = document.querySelectorAll('.fullElem .back')

allElem.forEach(function(elem) {

    elem.addEventListener("click", function () {
        

    
       fullElemPage[elem.id].style.display = "block"
       
        
    })
})


fullElemPagebackbtn.forEach(function(back) {
//   console.log(back);
  back.addEventListener('click', function() {
    console.log(back.id);
    fullElemPage[back.id].style.display = "none"
    
  })
  
    
})
}
openFeaturs()


// const form = document.querySelector(".addTask form");
// let taskinput =  document.querySelector('.addTask  form input')

// let taskDetailiInput=  document.querySelector('.addTask  form textarea')

// var

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//  console.log(taskinput.value);
//  console.log(taskDetailiInput.value);
 
 
  
// });



let currentTask  = [
  {
    task: "coding kro",
    details:"coding sikho",
    imp: true
  },
  {
    task: "kitab padho",
    details:"kitab lao",
    imp: false
  }

]




function rander() {
  var  allTask = document.querySelector('.allTask')
var sum = ''
currentTask.forEach(function (elem) {
  sum += `  <div class="Task">
               <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
               <button>Mark is Completed</button>
            </div>`
  
})
allTask.innerHTML = sum

}
rander()

const form = document.querySelector("form");
const taskinput = document.querySelector("form #task-input");
const taskDetailiInput = document.querySelector("form textarea");
const taskcheckbox = document.querySelector("form #checkbox");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(taskinput.value);
  // console.log(taskDetailiInput.value);
  // console.log(taskcheckbox.checked);
  // console.log(currentTask);
  currentTask.push({task:taskinput.value,details:taskDetailiInput.value,imp:taskcheckbox.checked})
  taskinput.value = ""
  taskDetailiInput.value = ""
  taskcheckbox.checked = false
  rander()
  
});
// localStorage.clear()