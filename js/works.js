"use strict";
document.addEventListener("DOMContentLoaded",function(){
    
    let currentIndex = 0;
    const work = document.querySelectorAll(".work");
    const works = document.querySelector("#works");
    const totalWorks = work.length;

    function scrollToIndex(index) {
        if (index < 0 || index >= totalWorks) return;
        works.style.transform = `translateX(-${index * 100}vw)`;
        works.style.transition = "all ease-out 1s";
        currentIndex = index;
    }

    window.addEventListener("wheel",function(event){
        if(event.deltaY > 0){
            if(currentIndex<totalWorks-1){
                scrollToIndex(currentIndex+1);
            }
        }else{
            if(currentIndex>0){
                scrollToIndex(currentIndex-1);
            }
        }
    });

});

