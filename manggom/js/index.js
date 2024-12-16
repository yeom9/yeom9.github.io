"use strict";
document.addEventListener("DOMContentLoaded",function(){

        // main image slider
        let currentIndex = 0;
        let sliderWrap = document.querySelector("#sliderWrap");
        let sliderClone = sliderWrap.firstElementChild.cloneNode(true);
        sliderWrap.appendChild(sliderClone);
    
        setInterval(function(){
    
            currentIndex++;
            sliderWrap.style.marginLeft = -currentIndex*100 + "%";
            sliderWrap.style.transition = "all 1s";
    
        if(currentIndex == 3){
            setTimeout(function(){
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginLeft = "0";
                currentIndex=0;
            },900);
        }
    
        },3000);

        // manggom news appear
        let observer = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting&&entry.target===newsTitle){
                    newsWrap.style.opacity = 1;
                    newsWrap.style.transform = "scale(1)";
                    newsTitle.classList.add("on");
                }else if(entry.intersectionRatio<1){
                    newsWrap.style.opacity = 0;
                    newsWrap.style.transform = "scale(1.1)";
                }
            })
        },{threshold:0.4})

        let newsTitle = document.querySelector("#manggomNews");
        let newsWrap = document.querySelector("#newsWrap");

        observer.observe(newsTitle);
});