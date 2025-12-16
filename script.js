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