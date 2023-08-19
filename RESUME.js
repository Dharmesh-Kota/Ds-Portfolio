/*Navigation Smooth Scroll*/

var navItems = document.querySelectorAll("#navigation a");
var interval;

for(var i = 0; i < navItems.length; i++){
    navItems[i].addEventListener("click", 
    function(event){
        event.preventDefault();
        var navItemsName = this.textContent.trim().toLowerCase();
        var destinationID = document.getElementById(navItemsName);
        
        interval = setInterval(scrollVertically, 10,
            destinationID);
    })
}

function scrollVertically(destinationID){
    var destination = destinationID.getBoundingClientRect();
    if(destination.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

/*Skill Bar Auto Fill*/

var skillType = document.querySelectorAll(".skills-type");
var skillSection = document.getElementById("skill-progress");
var animationDone = false;

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of skillType) {
    initialiseBar(bar);
}

function fillBar(target){
        let finalWidth = target.getAttribute("data-exp-level");
        let currentWidth = 0;
        
        let interval = setInterval(function(){
            if(currentWidth >= finalWidth){
                
                clearInterval(interval);
                return;
            }
            currentWidth++;
            target.style.width = currentWidth + "%";
        }, 5);
}

function checkScroll(){
    for(let target of skillType){
        var coordinates = target.getBoundingClientRect();
        if((target.getAttribute("data-visited") == "false") &&
         (coordinates.top <= (window.innerHeight - coordinates.height))){
            target.setAttribute("data-visited", true);
            fillBar(target);
        } else if(coordinates.top > window.innerHeight){
            initialiseBar(target);
        }
    }
}

window.addEventListener("scroll", checkScroll);