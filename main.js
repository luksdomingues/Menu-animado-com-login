function openFunction() {
    document.getElementById("menu").style.width = "300px"
    document.getElementById("mainbox").style.marginLeft = "300px"
    document.getElementById("mainbox").innerHTML = "Close"
}

function closeFunction() {
    document.getElementById("menu").style.width = "0px"
    document.getElementById("mainbox").style.marginLeft = "0px"
    document.getElementById("mainbox").innerHTML = "&#9776; Open"
}

document.querySelector(".button").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
}) /*SEMPRE CHECAR SE OS ELEMENTOS ID OU CLASS ESTAO NAS TAGS CITADAS NO SCRIPT. E COLOCAR O LINK OU A # PARA ABRIR POP-UP*/

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
}) /*USEI PARA ABRIR UMA POP-UP COM O FUNDO ESCURO. SERVE MUITO PARA FAZER UM LOGIN SEM TER Q SAIR DA PAGE*/