"use strict";
document.addEventListener("DOMContentLoaded",function(){

    window.addEventListener("resize",function(){
        this.location.reload();
    });

    let lottieScroll = lottie.loadAnimation({
        container: document.getElementById("lottieScroll"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "images/json/scroll.json"
    });

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

        // buttons
        const btnLeft = document.querySelector("#btnLeft");
        const btnRight = document.querySelector("#btnRight");
        
        function nextSlide (){
            currentIndex++;
            scrollToIndex(currentIndex++);
        }
        function prevSlide (){
            currentIndex--;
            scrollToIndex(currentIndex--);
        }

        btnLeft.addEventListener("click",prevSlide);
        btnRight.addEventListener("click",nextSlide);
    
        // mobile slide up animation
        let observerSlideUp = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                entry.target.style.animation = "slideUp 1s ease forwards, fadeIn 1s ease forwards";
                }
            });
        },{threshold:0.3});

        let slidesUp = document.querySelectorAll(".slide-up");
        slidesUp.forEach(function(slideUp){
            observerSlideUp.observe(slideUp);
        });

        // mobile fade in animation
        let observerFadeIn = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    entry.target.style.animation = "fadeIn 2s ease forwards";
                }
            });
        },{threshold:0.4});

        let imgsFadeIn = document.querySelectorAll(".fade-in");
        imgsFadeIn.forEach(function(imgFadeIn){
            observerFadeIn.observe(imgFadeIn);
        });


});

