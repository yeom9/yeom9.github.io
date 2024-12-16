"use strict";
document.addEventListener("DOMContentLoaded",function(){

    //dropdown menu
    let navLists = document.querySelectorAll(".nav-list");
    
    navLists.forEach(function(navList){
        navList.addEventListener("mouseover",function(){
            let subMenu = this.querySelector("ul");
            subMenu.style.display = "block";
            subMenu.style.animation = "dropdown linear 0.3s";
        })
        navList.addEventListener("mouseleave",function(){
            let subMenu = this.querySelector("ul");
            subMenu.style.display = "none";
        })
    });


    // to top button
        let toTop = document.querySelector("#toTop");
        let nav = document.querySelector("#nav");

        window.addEventListener("scroll", function(){
            if(window.scrollY < nav.offsetHeight){
                toTop.style.display = "none";
            }else{
                toTop.style.display = "block";
            }
        });
        toTop.onclick =  function (){
            window.scroll({top:0, behavior:"smooth"});
        }


});