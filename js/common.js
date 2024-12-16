"use strict";
document.addEventListener("DOMContentLoaded",function(){


    // mouse click animation
    document.addEventListener('click', function (e) {
        
        let animationElement = document.createElement('div');
        animationElement.classList.add('clickLottie');
        
        animationElement.style.left = `${e.pageX - 30}px`;
        animationElement.style.top = `${e.pageY - 30}px`;
        
        document.body.appendChild(animationElement);
        
        let clickLottie = lottie.loadAnimation({
            container: animationElement,
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "../images/json/click.json"
            
        });
        
        clickLottie.addEventListener("complete", function () {
            animationElement.remove();
        });
    });

});