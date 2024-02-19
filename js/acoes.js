acende()

document.getElementById("acende").addEventListener("click",acende)
document.getElementById("apaga").addEventListener("click",apaga)

function acende(){
    document.querySelector("h2").innerText = "Acesa"
    document.querySelector("img").src = "imgMObile/lampada1.png"
    document.querySelector("img").title = "Lâmpada acessa"
    document.querySelector("img").alt = "Lâmpada acesa"
}
function apaga(){ 
    document.querySelector("h2").innerText = "Apagada"
    document.querySelector("img").src = "imgMObile/lampada2.png"
    document.querySelector("img").title = "Lâmpada apagada"
    document.querySelector("img").alt = "Lâmpada apagada"
}
