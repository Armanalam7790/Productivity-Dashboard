var allElem = document.querySelectorAll('.elem')
var AllfullElems = document.querySelectorAll('.fullElem')


allElem.forEach(function(elem) {

    elem.addEventListener("click", function () {
        

    
       AllfullElems[elem.id].style.display = "block"
       
        
    })
})
