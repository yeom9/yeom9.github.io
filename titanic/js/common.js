"use strict";

document.addEventListener("DOMContentLoaded",function(){

    // nav scroll
    const nav = document.querySelector("#nav");
    window.addEventListener("scroll",function(){
        if(this.window.scrollY>0){
            nav.classList.add("scrolled");
        }else{
            nav.classList.remove("scrolled");
        }
    });

    // media screen max-width:768px 
    const toggleNav = document.querySelector("#nav>a:last-of-type");
    const navMenu = document.querySelector("#nav>ul:first-of-type");
    const navSNS = document.querySelector("#nav>ul:last-of-type");

    toggleNav.addEventListener("click",function(event){
        event.preventDefault();
        navMenu.classList.toggle("active");
        navSNS.classList.toggle("active");
        nav.classList.toggle("active");
    })

    navMenu.addEventListener("click",function(){
        navMenu.classList.toggle("active");
        navSNS.classList.toggle("active");
        nav.classList.toggle("active");
    });


        // scroll to top button
        let scrollToTop = document.querySelector("#scrollToTop");
        window.onscroll=function(){
            if(window.scrollY < 700){
                scrollToTop.style.opacity = 0;
            }else{
                scrollToTop.style.opacity = 1;
            }
        };
        scrollToTop.onclick = function(){
            window.scroll({top:0, behavior:"smooth"});
        };
        
});