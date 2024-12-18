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




                // 스크립트 파일 (script.js)

        // 이미지 데이터를 준비
        const images = [
            'images/image/01.jpg',
            'images/image/02.jpg',
            'images/image/03.jpg',
            'images/image/04.jpg',
            'images/image/05.jpg'
        ];
        
        // 버튼 클릭 시 새 창 열기
        document.getElementById('open-images').addEventListener('click', () => {
            // 새 창 생성
            const popupWindow = window.open('', '_blank', 'width=800,height=1000,scrollbars=yes');
        
            // 새 창에 HTML 구조 추가
            popupWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Image Viewer</title>
                <style>
                    body {
                        margin: 50px; /* 페이지 기본 여백 제거 */
                        padding: 0;
                        background-color: #fff;
                    }
                    img {
                        display: block; /* 이미지 간 간격 제거 */
                        width: 100%; /* 창 너비에 맞춤 */
                        height: auto; /* 비율 유지 */
                        margin: 0; /* 마진 제거 */
                        padding: 0; /* 패딩 제거 */
                        border: none; /* 경계선 제거 */
                    }
                    button {
                        padding: 10px 20px;
                        margin-top: 20px;
                        font-size: 16px;
                        background-color: #333;
                        color: white;
                        border: none;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    button:hover {
                        background-color: #555;
                    }
                </style>
            </head>
            <body>
                ${images.map(src => `<img src="${src}" alt="Image">`).join('')}
                <button onclick="window.close()">창 닫기</button>
            </body>
            </html>
            `);
        
            // 새 창 닫기 가능하게 설정
            popupWindow.document.close();
        });
  
        // 이미지 데이터를 준비
        const banners = [
            'images/image/네이버스마트스토어-자유배너PC(2).jpg',
            'images/image/자유배너mobile.jpg'
        ];

        // 버튼 클릭 시 새 창 열기
        document.getElementById('open-banner').addEventListener('click', () => {
            // 새 창 생성
            const popupWindow = window.open('', '_blank', 'width=800,height=1000,scrollbars=yes');

            // 새 창에 HTML 구조 추가
            popupWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>이미지 뷰어</title>
                <style>
                body {
                    margin: 50px; /* 페이지 기본 여백 */
                    padding: 0;
                    background-color: #fff;
                }
                
                img {
                    display: block; /* 이미지 간 간격 제거 */
                    width: auto; /* 창 너비에 맞춤 */
                    max-width: 100%; /* 최대 너비는 원본 크기로 제한 */
                    height: auto; /* 비율 유지 */
                    margin: 0 0 20px 0; /* 이미지 사이 간격 추가 (하단 여백) */
                    padding: 0; /* 패딩 제거 */
                    border: none; /* 경계선 제거 */
                }
                button {
                    padding: 10px 20px;
                    margin-top: 20px;
                    font-size: 16px;
                    background-color: #333;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 5px;
                }
                button:hover {
                    background-color: #555;
                }
                </style>
            </head>
            <body>
                ${banners.map(src => `<img src="${src}" alt="이미지">`).join('')}
                <button onclick="window.close()">창 닫기</button>
            </body>
            </html>
            `);

            // 새 창 닫기 가능하게 설정
            popupWindow.document.close();
        });


});

