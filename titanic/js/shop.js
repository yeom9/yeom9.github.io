"use strict";

document.addEventListener("DOMContentLoaded",function(){

    const mediaQuery = window.matchMedia("(max-width:767px)");

    function widthChange(e){
        if(e.matches){ 
            const mediaMobiles = document.querySelectorAll(".mediaMobile");
            mediaMobiles.forEach(function(mediaMobile){
                mediaMobile.style.display = "none";
            })
        }
    }
        widthChange(mediaQuery);
        mediaQuery.addEventListener("change",widthChange);

    let items = [
        {src: "images/items/item01.png", alt:"Titanic (25th Anniversary) - Vinyl Soundtrack", name: "Titanic (25th Anniversary) - Vinyl Soundtrack", price: "$40.99"},
        {src: "images/items/item02.png", alt:"Limited Edition Titanic Coal Coin", name: "Limited Edition Titanic Coal Coin", price: "$36.95"},
        {src: "images/items/item03.png", alt:"Wisteria Cup and Saucer Set - Replica", name: "Wisteria Cup and Saucer Set - Replica", price: "$18.99"},
        {src: "images/items/item04.png", alt:"Limited Edition Authentic Coal", name: "Limited Edition Authentic Coal", price: "$79.95"},
        {src: "images/items/item05.png", alt:"Titanic Model Keychain", name: "Titanic Model Keychain", price: "$6.99"},
        {src: "images/items/item06.png", alt:"Third Class Replica Blanket", name: "Third Class Replica Blanket", price: "$59.95"},
        {src: "images/items/item07.png", alt:"Necklace and Comb pin Set", name: "Necklace and Comb pin Set", price: "$38.99"},
        {src: "images/items/item08.png", alt:"1st Class Dinner Plate", name: "1st Class Dinner Plate", price: "$27.99"},
        {src: "images/items/item09.png", alt:"194 PCS Titanic Building Blocks", name: "194 PCS Titanic Building Blocks", price: "$14.95"},
        {src: "images/items/item10.png", alt:"Boardingpass Keychain", name: "Boardingpass Keychain", price: "$6.99"},
        {src: "images/items/item11.png", alt:"Titanic Necklace - Heart of the ocean", name: "Titanic Necklace - Heart of the ocean", price: "$24.95"},
        {src: "images/items/item12.png", alt:"Titanic Officer Bear", name: "Titanic Officer Bear", price: "$24.95"},
    ]

    let itemsContainer = document.getElementById("itemsContainer");

    items.forEach(function(item){
        let div = document.createElement("div");

        // item image - div>a>img
        let itemImageLink = document.createElement("a");
        itemImageLink.href="#";
        let itemImage = document.createElement("img");
        itemImage.src = item.src;
        itemImage.alt = item.alt;
        itemImageLink.appendChild(itemImage);

        // inner div
        let innerDiv = document.createElement("div");

        // wish list icon - div>div>a>img
        let heartIcon = document.createElement("img");
        heartIcon.src = "images/icons/empty-heart.png";
        innerDiv.appendChild(heartIcon);
        
        // click wish list
        heartIcon.addEventListener("click",function(){
            if(heartIcon.src.includes("empty-heart.png")){
                heartIcon.src = "images/icons/red-heart.png";
            }else{
                heartIcon.src = "images/icons/empty-heart.png"
            }
        });

        // add to cart - div>div>a
        let addToCartLink = document.createElement("a");
        addToCartLink.textContent = "+ Add to cart";

        // cart count
        const cartCount = document.querySelector("#cartCount");
        let addToCartBtns = document.querySelectorAll("#itemsContainer>div>div>a");

        let count = 0;
        cartCount.textContent = count;
        
        addToCartBtns.forEach(function(addToCartBtn){

            addToCartBtn.addEventListener("click",function(){
                count++;
                cartCount.textContent = count;

                if(!cartCount.classList.contains("count")){
                    cartCount.classList.add("count");
                }
            });
        });


        let itemName = document.createElement("span");
        let itemPrice = document.createElement("span");

        itemName.textContent = item.name;
        itemPrice.textContent = item.price;

        innerDiv.appendChild(addToCartLink);

        div.appendChild(itemImageLink);
        div.appendChild(innerDiv);

        div.appendChild(itemName);
        div.appendChild(itemPrice);
        itemsContainer.appendChild(div);
    });

    // selected menu
    const categories = document.querySelectorAll("#itemCategory>div:nth-child(2)>a");

    categories.forEach(function(category){
        
        category.addEventListener("click",function(){
            
            categories.forEach(function(unselected){
                unselected.classList.remove("selected-category");
            });

            category.classList.add("selected-category");
        });
    });

});
