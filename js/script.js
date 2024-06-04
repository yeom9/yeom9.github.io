document.addEventListener("DOMContentLoaded",function(){
    
    // 새로고침했을 때 페이지의 상단부터
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    
    // nav버튼
    let navBtns = document.querySelectorAll("#nav > ul > li > a");
    let scrollpoints = document.querySelectorAll(".scrollpoint");
    let aboutTop = scrollpoints[0].offsetTop - 100;
    let worksTop = scrollpoints[1].offsetTop - 100;
    let contactTop = scrollpoints[2].offsetTop + 1000;

    navBtns[0].onclick = function(){
        window.scroll({top:aboutTop, behavior:"smooth"})
    }
    navBtns[1].onclick = function(){
        window.scroll({top:worksTop, behavior:"smooth"})
    }
    navBtns[2].onclick = function(){
        window.scroll({top:contactTop, behavior:"smooth"})
    }
    
    // 상단이동버튼
    let toTop = document.querySelector("#toTop");
    window.onscroll = function (){
        topScrollFunction();
    };
    function topScrollFunction(){
        if(window.scrollY < aboutTop){
            toTop.style.display = "none";
        }else{
            toTop.style.display = "block";
        }
    };

    // h1,상단이동 smooth
    let h1 = document.querySelector("h1");
    h1.onclick = function(){
        window.scroll({top:0, behavior:"smooth"});
    }
    toTop.onclick =  function (){
        window.scroll({top:0, behavior:"smooth"});
    }
    
    // nav 상단 고정 및 스타일
    document.addEventListener("scroll", function(){
        let nav = document.querySelector("#nav");
        let wrap = document.querySelector("#wrap");
        let wrapTop = wrap.offsetTop;

        if(window.scrollY > wrapTop){
            nav.classList.add("fixed-nav");
            nav.style.backgroundColor = "rgba(244,244,244,0.8)";
        }else {
            nav.classList.remove("fixed-nav");
            nav.style.backgroundColor = "";
        }
    })

    // section이 화면에 보여질때
    let observer = new IntersectionObserver((e)=>{
        e.forEach((container)=>{
            if(container.isIntersecting){
                container.target.style.opacity = 1;
            }else{
                container.target.style.opacity = 0;
            }
        })
    })
    let section = document.querySelectorAll("section")
        observer.observe(section[0])
        observer.observe(section[1])
        observer.observe(section[2])


    // section title slide 애니메이션
    let sectionTitles = document.querySelectorAll("h2");
    let circleInfo = document.querySelector("#about_circle > ul");
    window.addEventListener("scroll", function sectionTitleAnimation(){
        sectionTitles.forEach(function(sectionTitle){
            if(window.scrollY + window.innerHeight >= sectionTitle.offsetTop + sectionTitle.offsetHeight) {
                sectionTitle.classList.add("sectionTitleAni");
                circleInfo.classList.add("sectionTitleAni");
            } else {
                sectionTitle.classList.remove("sectionTitleAni");
            }
        });
    });

    // skills게이지 애니메이션
    let skills = document.getElementById("skills");
    let skillfills = document.querySelectorAll(".skill_fill");
    
    window.addEventListener("scroll", function skillfillAnimation(){
        skillfills.forEach(function(skillfill){
            if(window.scrollY + window.innerHeight >= skills.offsetTop + skills.offsetHeight) {
                skillfill.classList.add("skillAni");
            } else {
                skillfill.classList.remove("skillAni");
            }
        });
    });

    // site소개 박스 애니메이션
    let siteboxes = document.querySelectorAll(".site-box");

    window.addEventListener("scroll", function siteboxAnimation(){
        siteboxes.forEach(function(sitebox){
            if(window.scrollY + window.innerHeight >= sitebox.offsetTop + (sitebox.offsetHeight)/2){
                sitebox.classList.add("siteboxAni");
            }else{
                sitebox.classList.remove("siteboxAni");
            }
        })
    })

    // site image animation
    let siteImages = document.querySelectorAll(".site > a > img");
    window.addEventListener("scroll",function sisteImageAnimation(){
        siteImages.forEach(function(siteImage){
            if(window.scrollY + window.innerHeight >= siteImage.offsetTop + (siteImage.offsetHeight)/2){
                siteImage.classList.add("siteImageAni");
            }else{
                siteImage.classList.remove("siteImageAni");
            }
        })
    })

        // 모달창
        let modal = document.querySelector("#modal");
        let modalImgs = document.querySelectorAll(".modal-img");
        let closeBtn = document.querySelector("#modal>button");
        let clickedImage = document.querySelector("#modal>div");
        let overlay = document.querySelector("#overlay");
        let overlayTarget = document.querySelector("#designWorks>div");
        
        //모달창 열면 클릭한 이미지를 표시해줌
        function openModal (imageSrc) {
            clickedImage.innerHTML = `<img src="${imageSrc}">`;
            modal.style.display = "block";
            overlay.style.display="block";
            overlayTarget.classList.add("filter-blur");
            document.body.style.overflow = "hidden";
        }

        //각각의 이미지에 이벤트리스너 추가
        modalImgs.forEach(function(modalImg){
            modalImg.addEventListener("click",function(){
                openModal(modalImg.src);
            })
        })

        //닫기버튼 클릭
        closeBtn.addEventListener("click",function(){
                modal.style.display = "none";
                overlay.style.display = "none";
                overlayTarget.classList.remove("filter-blur");
                document.body.style.overflow = "auto";
            });

    //contact card animation
    let contactCard = document.querySelector("#contactCard");
    let Typing = document.querySelector("#contactCard span:last-of-type");
    window.addEventListener("scroll", function(){
        if(window.scrollY + window.innerHeight >= contactCard.offsetTop + (contactCard.offsetHeight)/2){
            contactCard.classList.add("contactCardAni");
            Typing.style.animation = "blink 0.8s infinite, typing 2s steps(18)";
        }else{
            contactCard.classList.remove("contactCardAni");
        }
    })


});