/*Loand*/
function loading() {
    document.getElementsByClassName('load')[0].style.display = "none";
    document.getElementsByClassName('loandig')[0].style.display = "block";
}

/*Carrosel*/
const imgs = document.getElementById("img_carrosel") 
const img_carrosel = document.querySelectorAll("#img_carrosel #texto_carrosel")

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img_carrosel.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 228}px)`;
}

setInterval(carrossel, 3500);

/*Mapeamento*/ 
function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#blog").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#Mine");

    console.log("go to up");
});

document.querySelector("#projetos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#Projeto");

    console.log("go to up");
});