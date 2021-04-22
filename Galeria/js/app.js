let imgGrande = document.getElementById("imgGrande");
let contenedorM = document.getElementById("contenedorM");

for(let i=1; i <= 6; i++){
    let NUevaImg = document.createElement("img");
    NUevaImg.setAttribute("src", "img/img"+i+".jpg");

    contenedorM.appendChild(NUevaImg);

    NUevaImg.addEventListener("click", function(e){
        let mysrc = e.target.getAttribute("src")
        CambiarImg(mysrc)
    });
}

function CambiarImg(mysrc){
    imgGrande.setAttribute("src", mysrc);
}