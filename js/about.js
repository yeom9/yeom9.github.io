"use strict";
document.addEventListener("DOMContentLoaded",function(){

    // slideUp animation
    let observerSlideUp = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.style.animation = "slideUp 1s ease forwards, fadeIn 1s ease forwards";
            }
        });
    },{threshold:0.4});

    let contentsSlideUp = document.querySelectorAll(".observer-slideUp");
    contentsSlideUp.forEach(function(contentSlideUp){
        observerSlideUp.observe(contentSlideUp);
    });

    // skill bar animation
    let observerSkills = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.style.animation = "fadeIn 2s ease forwards, skillBar 3s ease forwards";
            }
        });
    },{threshold:1});
    let skillfills = document.querySelectorAll(".skill-fill");
    skillfills.forEach(function(skillfill){
        observerSkills.observe(skillfill);
    });
    
});