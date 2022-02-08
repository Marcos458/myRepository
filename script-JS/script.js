

function verificar() {

    var pess = window.document.querySelector('#nome')
    var res = window.document.getElementById('res')
    var n = pess.value

    var data = new Date();
    var hora = data.getHours();

    res.innerHTML = `<p class="p">Olá <strong>${n}</strong> É um prazer ter você aqui!</p>`


    if (hora >= 5 && hora < 12) {
        res.innerHTML += `<p class="p1"><strong>Bom dia!</strong</p>`
    }

    else if (hora >= 12 && hora < 18) {
        res.innerHTML += `<p class="p1"><strong>Boa tarde!</strong></p>`

    } else if (hora >= 18) {
        res.innerHTML += `<p class="p1"><strong>Boa noite!</strong></p>`

    } else if (hora < 5) {
        res.innerHTML += `<p class="p1"><strong>Boa Madrugada!</strong></p>`
    }
    
    pess.value = ''
    pess.focus()
    
}
