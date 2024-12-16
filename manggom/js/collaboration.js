"use strict";
document.addEventListener("DOMContentLoaded",function(){

    let observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateX(0)";
            }else{
                entry.target.style.opacity = 0;
                entry.target.style.transform = "translateX(-40%)";
            }
        })
    },{threshold:0.3});

    let banner = document.querySelectorAll("#collaboWrap > a");
    banner.forEach(function(a){
        observer.observe(a);
    })

});