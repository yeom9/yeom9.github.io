"use strict";
document.addEventListener("DOMContentLoaded",function(){

    let observerSlideUp = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.style.opacity = "0";
                entry.target.style.animation = "slideUp 1s ease forwards, fadeIn 1s ease forwards";
            }
        });
    },{threshold:0.4});

    let contentsSlideUp = document.querySelectorAll(".observer-slideUp");
    contentsSlideUp.forEach(function(contentSlideUp){
        observerSlideUp.observe(contentSlideUp);
    });

});