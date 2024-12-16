"use strict";
document.addEventListener("DOMContentLoaded",function(){

    

    //컨텐츠 나타나기
    let observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateX(0)";
                entry.target.style.transform = "translateY(0)";
                // entry.target.style.transform = "translateX(0)";
            }else{
                entry.target.style.opacity = 0;
                // entry.target.style.transform = "translateX(-40%)";
            }
        })
    },{threshold:0.3});

    let contents = document.querySelectorAll(".content-appear");
    contents.forEach(function(content){
        observer.observe(content);
    })

});