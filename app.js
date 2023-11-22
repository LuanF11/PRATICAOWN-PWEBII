const Link = document.querySelector("#frameLink");
const LinkTop = document.querySelector("#url_text");


LinkTop.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        Link.src = event.target.value;
    }
});

const dotRed = document.querySelector('#abri');

dotRed.addEventListener('click', function() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});

const botao = document.querySelector("#escuro");

const btnCor = document.querySelector("#escuro");
btnCor.addEventListener("click",()=>{

    const body = document.querySelector(".container-frameTab")
    body.classList.toggle('browser-black')

    const row = document.querySelector(".row")
    row.classList.toggle('row-black')

   
})

Exempl