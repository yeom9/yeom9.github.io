"use strict";

document.addEventListener("DOMContentLoaded",function(){

    const mediaQuery = window.matchMedia("(max-width:767px)");

    function widthChange(e){
        if(e.matches){

            // character introduction animation
            let observerFlipY = new IntersectionObserver(function(entries){
                entries.forEach(function(entry){
                    if(entry.isIntersecting){
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = "translateY(0)";
                    }else{
                        entry.target.style.opacity = 0;
                        entry.target.style.transform = "translateY(10%)";
                    }
                });
            },{threshold:0.7});
        
            let contentsFlipY = document.querySelectorAll(".character:nth-of-type(odd)>div");
            contentsFlipY.forEach(function(contentFlipY){
                observerFlipY.observe(contentFlipY);
            });

            // character introduction animation
            let observerFlipX = new IntersectionObserver(function(entries){
                entries.forEach(function(entry){
                    if(entry.isIntersecting){
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = "translateY(0)";
                    }else{
                        entry.target.style.opacity = 0;
                        entry.target.style.transform = "translateY(10%)";
                    }
                });
            },{threshold:0.7});

            let contentsFlipX = document.querySelectorAll(".character:nth-of-type(even)>div");
            contentsFlipX.forEach(function(contentFlipX){
                observerFlipX.observe(contentFlipX);
            });
        }else{
            // character introduction flip Y animation
            let observerFlipY = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "rotateY(0deg)";
                }else{
                    entry.target.style.opacity = 0;
                    entry.target.style.transform = "rotateY(-60deg)";
                }
            });
        },{threshold:0.7});

        let contentsFlipY = document.querySelectorAll(".character:nth-of-type(odd)>div");
        contentsFlipY.forEach(function(contentFlipY){
            observerFlipY.observe(contentFlipY);
        });

        // character introduction flip X animation
        let observerFlipX = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "rotateX(0deg)";
                }else{
                    entry.target.style.opacity = 0;
                    entry.target.style.transform = "rotateX(60deg)";
                }
            });
        },{threshold:0.7});

        let contentsFlipX = document.querySelectorAll(".character:nth-of-type(even)>div");
        contentsFlipX.forEach(function(contentFlipX){
            observerFlipX.observe(contentFlipX);
        });
        }
    }

    widthChange(mediaQuery);
    mediaQuery.addEventListener("change",widthChange);



    //nav trailer, cast buttons
    let navBtns = document.querySelectorAll("#nav > ul > li > a");
    let trailer = document.querySelector("#trailer>h2");
    let trailerTop = trailer.offsetTop;
    let cast = document.querySelector("#cast>h2");
    let castTop = cast.offsetTop;

    navBtns[0].onclick=function(){
        window.scroll({top:trailerTop, behavior:"smooth"})
    };
    navBtns[1].onclick=function(){
        window.scroll({top:castTop, behavior:"smooth"})
    };

    // contents fade-in, fade-out
    let observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform="translateY(0px)";
            }else{
                entry.target.style.opacity = 0;
                entry.target.style.transform="translateY(20px)";
            }
        });
    },{threshold:0.5});

    let contents = document.querySelectorAll(".content-observe");
    contents.forEach(function(content){
        observer.observe(content);
    });

    // cast title slide up animation
    let observerSlideUp = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.style.transform="translateY(0)"
            }else{
                entry.target.style.transform="translateY(80%)"
            }
        });
    },{threshold:0.1});

    let contentSlideUp = document.querySelector("#cast>h2>span");
        observerSlideUp.observe(contentSlideUp);

    // character images blur animation
    let observerBlur = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.style.filter = "opacity(1) blur(0) grayscale(0)";
            }else{
                entry.target.style.filter = "opacity(0.5) blur(5px) grayscale(100%)";
            }
        });
    },{threshold:0.7});

    let contentsBlur = document.querySelectorAll(".character>img");
    contentsBlur.forEach(function(contentBlur){
        observerBlur.observe(contentBlur);
    });


    // // character introduction flip Y animation
    // let observerFlipY = new IntersectionObserver(function(entries){
    //     entries.forEach(function(entry){
    //         if(entry.isIntersecting){
    //             entry.target.style.opacity = 1;
    //             entry.target.style.transform = "rotateY(0deg)";
    //         }else{
    //             entry.target.style.opacity = 0;
    //             entry.target.style.transform = "rotateY(-60deg)";
    //         }
    //     });
    // },{threshold:0.7});

    // let contentsFlipY = document.querySelectorAll(".character:nth-of-type(odd)>div");
    // contentsFlipY.forEach(function(contentFlipY){
    //     observerFlipY.observe(contentFlipY);
    // });

    // // character introduction flip X animation
    // let observerFlipX = new IntersectionObserver(function(entries){
    //     entries.forEach(function(entry){
    //         if(entry.isIntersecting){
    //             entry.target.style.opacity = 1;
    //             entry.target.style.transform = "rotateX(0deg)";
    //         }else{
    //             entry.target.style.opacity = 0;
    //             entry.target.style.transform = "rotateX(60deg)";
    //         }
    //     });
    // },{threshold:0.7});

    // let contentsFlipX = document.querySelectorAll(".character:nth-of-type(even)>div");
    // contentsFlipX.forEach(function(contentFlipX){
    //     observerFlipX.observe(contentFlipX);
    // });

});
