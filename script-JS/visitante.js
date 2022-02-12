var data = document.querySelector("#dataHora")
var a = new Date()
var Data = (a.toLocaleDateString("pt-BR"))
var hora = (a.toLocaleTimeString("pt-BR"))
data.textContent = `${Data} e são ${hora}`


