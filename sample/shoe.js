// getting all the elements from the DOM
const imgContainer = document.querySelector(".showcase > div");
const img = document.querySelector(".showcase img");
const shadow = document.querySelector(".shadow");
const thumb = document.querySelector(".thumbs img");
const titleOverlay = document.querySelector(".titleOverlay ");
const title = document.querySelector(".titleText");
const desc= document.querySelector(".description");
const sizes = document.querySelector(".sizes > li");
const stars = document.querySelector("stars span");
const price = document.querySelector(".price");
const colorBtn =document.querySelectorAll(".color");

const pag =document.querySelectorAll(".pag");
const prev = document.querySelector(".arr-left");
const next = document.querySelector(".arr-right");
const shoeNum = document.querySelectorAll(".shoe-num");
const shoeTotal = document.querySelector(".shoe-total");

// Id variables
let id  = 1;
let colorType = 1;
let shoe = 1;

// Shoe Details
const colors = [
    [
        "#ae001b",
        "#111111"
    ],
    [
        "linear-gradient(0deg, orange, red)",
        "#bda08e"
    ],
    [
        "linear-gradient(odeg, #00b8ea 0%, #e6882d 50%, #e56da6 100%)",
        "linear-gradient(0deg, #dae766, #b2afaa)"
    ],

];

const prices = ["150", "250", "175"];
const names =[
    [
        "red Nike Jordon Max Aura 3",
        "Black Nike Jordon Max Aura 3"
    ],
    [
        "Black/Orange Nike Air Max 95",
        "Beige/Gray Nike Air Max 95"
    ],
    [
        "Colorful NIKE Jordon Delta 2 SP",
        "Gray NIKE Jordon Delta 2 Sp"
    ],
];
const description = [
    [
        "Bring a piece of history to the city's urban streets as you walk into Nike Jordan Max Aura 3 men's sneakers"
    ],
    [
        "Nike Air Max 95 men's sneakers move you with thw strength and fluidity inspired by the anatomy of the human body."
    ],
    [
       " Jordan Delta 2 SP men's basketball shoes offer a fresh and fearless approch to the characteristics you want" 
    ],
];
const rating = [4, 5, 3];

// Retriving image from folder path
function getImage(imgType, shoe, colorType, id, extension){
    return "img/"+
    imgType + "/shoe" + shoe + "-" +
    colorType + "/img" + id + "." + extension;
}

// Reset Active State to buttons
function resetActive(element, elementClass, i){
    for(let i=0; i<element.length; i++){
        element[i].classList.remove(elemtClass + "-active");
    }
    element[i].classList.add(elementClass + "-active");
}
// Fire Animations
function animate(element, time, anim){
    element.style.animation =anim;

    setTimeout(()=>{
        element.style.animation ="none";
    },time);
}
// Assign Color to Color Buttons
function assignColors(i, shoe){
    colorBtn[i].style.background = colors[shoe - 1][i];
}
// set rating by filling out stars
function resetStars(shoe){
    for(let i =0; i< stars.length; i++){
        stars[i].innerText = "star_outline";
    }
//Adding the Rating
for (let i=0; i< ratings[shoe]; i++){
    stars[i].innerText ="star";
}
}
//Changing shoe size
for (let i=0; i < sizes.length; i++){
    sizes[i].addEventListener("click", (e)=>{
        resetActive(sizes, "size", i);
    });
}
// setting up all of the initial data for the first shoe that loads
shoeTotal.innerText = "0" + pag.length;
shoeNum.innerText ="0" +  shoe;
price.innerText = "$"  + prices[0];
resetStars(shoe - 1);
title.innerText = names[0][0];
desc.innerText = description[0];

// changing images
for (let i=0; i < thumb.length; i++){
    thumb[i].addEventListener("click",(e)=>{
        id = i+1;
        img.src = getImage(
            "showcase", shoe, colorType, id, "png"
        );
        resetActive(thumb, "thumb", i);
        animate(imgContainer, 550, "fade 500ms ease-in-out");
    });
}
console.log("hello");