"use strict";

let tabcontent = document.querySelectorAll(".tabcontent");
let tabheader__item = document.querySelectorAll(".tabheader__item");


for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
}
tabcontent[0].style.display = 'block'

for (let i = 0; i < tabheader__item.length; i++) {
    tabheader__item[i].onclick = () => {
        for (let x = 0; x < tabcontent.length; x++) {
            tabcontent[x].style.display = 'none'
            tabheader__item[x].classList.remove("tabheader__item_active")
        }
        tabcontent[i].style.display = 'block'
        tabheader__item[i].classList.add("tabheader__item_active")
    }
}

let offer__slide = document.querySelectorAll(".offer__slide")
let next = document.querySelector(".offer__slider-next")
let prev = document.querySelector(".offer__slider-prev")
let current = document.querySelector("#current")
let i = 0
let x = 1
for (let i = 0; i < offer__slide.length; i++) {
    offer__slide[i].style.display = 'none'
}
offer__slide[0].style.display = 'block'

next.onclick = () => {
    if (i < 3) {
        offer__slide[i].style.display = 'none'
        i++; x++
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`
    } else {
        offer__slide[i].style.display = 'none'
        i = 0; x = 1
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`
    }
}

prev.onclick = () => {
    if(i > 0){
        offer__slide[i].style.display = 'none';
        i--; x--;
        offer__slide[i].style.display = "block"
        current.innerHTML = `0${x}`
    }else{
        offer__slide[i].style.display = 'none'
        i = 3; x = 4;
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`
    }
}


let modal = document.querySelector(".modal");
let btn_dark = document.querySelector(".btn_dark");
let btn_white = document.querySelector(".btn_white");

let close = document.querySelector(".modal__close");
let btn = document.querySelectorAll(".btn");

btn[0].addEventListener("click", () =>{
    modal.style.display = "block";
});

close.addEventListener("click", () =>{
    modal.style.display = "none"
});

let timer__block = document.querySelector(".timer__block")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

const updateTimer = () => {
    const now = new Date().getTime();
    const endDate = new Date("2024-01-27T14:39:00").getTime();
    let timeLeft = endDate - now;
    if (timeLeft > 0) {
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
    }
}
setInterval(updateTimer, 1000);