function clickMenu() {
    if (menuburg.style.display == 'block'){
        menuburg.style.display = 'none'
    } else {
        menuburg.style.display = 'block'
    }
}

/*const form = document.getElementById('form')*/
const massa = document.getElementById('opMassas')
const recheio = document.getElementById('opRecheios')
const cobertura = document.getElementById('opCoberturas')
const tamanho = document.getElementById('opTamanhos')
/*const whats = "https://api.whatsapp.com/send?phone=5511981273027&text=Ol%C3%A1!%20"+ massa+"Gostaria%20de%20fazer%20um%20pedido%20%F0%9F%8D%B0%F0%9F%A7%81"*/
/*const enviarPedido = document.getElementById('enviarPedido')*/

function clean(e){
    e.preventDefault();
}

function enviarMsg(url){
    const win = window.open(url, 'blank')
    win.focus()
}

function enviarPedido() {
    if (massa.value.length == "" || recheio.value.length == "" || cobertura.value.length == "" || tamanho.value.length == "") { window.alert('Falta preencher informações!')
    } else { enviarMsg("https://api.whatsapp.com/send?phone=5511981273027&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido:%20bolo%20de%20"+massa.value+",%20recheio%20de%20"+recheio.value+"%20e%20cobertura%20de%20"+cobertura.value+",%20no%20tamanho%20"+tamanho.value+".")
       clean
    } 
}
