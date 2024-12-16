"use strict";

document.addEventListener("DOMContentLoaded",function(){

    //nav dark background
    const nav = document.querySelector("#nav");
    window.addEventListener("scroll",function(){
        if(this.window.scrollY>0){
            nav.classList.add("scrolled");
        }else{
            nav.classList.remove("scrolled");
        }
    });

    // about ship titanic title
    let observerTitle = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.style.marginLeft = "0";
                entry.target.style.marginRight = "0";
                entry.target.style.opacity = "1";
            }else{
                entry.target.style.marginRight = "800px";
                entry.target.style.marginLeft = "200px";
                entry.target.style.opacity= "0";
            }
        });
    },{threshold: 0.5});

    let shipTitle = document.querySelector("#shipInfo > h2");
    observerTitle.observe(shipTitle);

    // about ship titanic description
    let observerDescription = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.style.opacity="1";
                entry.target.style.transform = "translateX(0)";
            }else{
                entry.target.style.opacity="0";
                entry.target.style.transform = "translateX(30px)";
            }
        })
    },{threshold:0.3});
    let shipDescriptions = document.querySelectorAll("#shipInfo>div>ul");
    shipDescriptions.forEach(function(shipDescription){
        observerDescription.observe(shipDescription);
    });


    // passenger facilities gallery
    const wrap = document.querySelector("#wrap");

    let keyframes = [
        { transform: "translateX(0)" },
        { transform: "translateX(-50%)" }
    ]
    let options = {
        duration: 80000,
        easeing: "linear",
        iterations: Infinity
    }

    const gallery = wrap.animate(keyframes, options);

    // gallery buttons
    const buttons = document.querySelector("#inside>div:first-of-type");

    buttons.addEventListener("mouseover",function(event){ 
        const target = event.target.closest(".button");
        handleSpeed(target.dataset.function);
    });

    function handleSpeed(functionName){
        switch (functionName){
            case "left":
            gallery.playbackRate = 6;
            break;
            
            case "right":
            gallery.playbackRate = 6;
            gallery.reverse();
            break;
        }
    };

    buttons.addEventListener("mouseout", function(event) {
        const target = event.target.closest(".button");
        if (target) {
            gallery.playbackRate = 1;
        }
    });



});