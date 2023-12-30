"use strict"
/*--------------------------- Slider ------------------------------------------------------*/
var images = Array.from(document.querySelectorAll(".img-slider .item  img"));
var mainImage = document.querySelector(".light-box .main-img");
var lightBox = document.querySelector("#lightBox");

var closeBtn = document.getElementById("close");
var nextBtn = document.getElementById("right");
var prevBtn = document.getElementById("left");
var globalIndex;
// console.log(closeBtn)

// console.log(...images);
// console.log(zoomImage);
for (var i = 0 ; i<images.length ; i++){
    // console.log(images[i]);
    images[i].addEventListener ('click' , function(e){
        lightBox.classList.replace("d-none" , "d-flex");
        var indexTarget =images.indexOf(e.target);
        globalIndex = indexTarget;
        // console.log(indexTarget)
        mainImage.style.cssText = `
        background-image: url(${e.target.src});
        `
    })
}



// start Close Slider Function ----------

document.addEventListener('click' , function(e){
    // console.log(e.target.classList);
    if (e.target.id == "lightBox"){
        closeSlider ()
    }
})

closeBtn.addEventListener ('click' , function(){
    
    closeSlider ()
})

function closeSlider (){
    lightBox.classList.replace("d-flex" , "d-none");
}
// end Close Slider Function ----------


// Start Of Next Slid Function --------

nextBtn.addEventListener('click' , function(){
    getNextImg ()
});


function getNextImg () {
    globalIndex++;
    if(globalIndex>= images.length){
        globalIndex =  globalIndex - images.length;
    }
    mainImage.style.cssText = `
    background-image: url(${images[globalIndex].src});
    `
}
// end Of Next Slid Function --------


// Start Of Prev Slid Function ------
prevBtn.addEventListener('click' , function(){
    getPrevImage ();
})

function getPrevImage (){

    globalIndex--;

    if(globalIndex< 0){
        globalIndex =  globalIndex + images.length;
    }
    mainImage.style.cssText = `
    background-image: url(${images[globalIndex].src});
    `
}
// End Of Prev Slid Function -------

// Start Handle Keys
document.addEventListener('keydown' , function(e){
    // console.log(e.key);

    if (e.key === "ArrowRight"){
        getNextImg ();
    }else if (e.key === "ArrowLeft"){
        getPrevImage();
    }else if (e.key === "Escape"){
        closeSlider();
    }
})

// End Handle Keys


/* ------------------------------------------------------------------------------------------ */