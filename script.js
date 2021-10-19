const IMG = document.querySelector('.img-main')

let tempoParaTrocarImagem = 4000
let controleCarrousel = 0
let controleSubida = 0

function iniciaCarrousel() { 
    let alturaPagina = window.pageYOffset 
    if (alturaPagina < 800) {
        if (controleCarrousel == 0) {
            IMG.style.transform = 'translateX(-100%)'
            controleCarrousel++
            setTimeout(iniciaCarrousel, tempoParaTrocarImagem)
        } else if (controleCarrousel == 1) {
            IMG.style.transform = 'translateX(-200%)'
            controleCarrousel++
            setTimeout(iniciaCarrousel, tempoParaTrocarImagem)
        } else {
            IMG.style.transform = 'translateX(0%)'
            controleCarrousel = 0
            setTimeout(iniciaCarrousel, tempoParaTrocarImagem)
        }  
    } else {
        controleSubida = 1
        reiniciaCarrousel()
    }
}

setTimeout(iniciaCarrousel, 2000)

function reiniciaCarrousel() {
    if (controleSubida == 1) {
        let alturaPagina = window.pageYOffset
        if (alturaPagina < 800) {
            iniciaCarrousel()
            controleSubida = 0
        }
        setTimeout(reiniciaCarrousel, 3000)
    }
}