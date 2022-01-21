
function horadata() {

    var horadata = window.document.querySelector('div#dataHora')
    var res = window.document.querySelector('#res')
    var n = horadata.value

    var data = new Date()
    var hora = data.getDate()

    res.innerHTML = `<p class="p1">${hora}</p>`

}
