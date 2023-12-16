let ataquejugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
 

function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
   
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    

    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    let sectionSeleccionarMascota = document.getElementById('seleccionar_mascotas')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipoge = document.getElementById('Hipoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')

    let spanMascotaJugador = document.getElementById('mascota-jugador')



    if (inputHipoge.checked) {
       
        spanMascotaJugador.innerHTML = 'Hipoge'

    } else if (inputCapipepo.checked) {

        spanMascotaJugador.innerHTML = 'Capipepo'

    } else if (inputRatigueya.checked) {

        spanMascotaJugador.innerHTML = 'Ratigueya'

    } else if (inputLangostelvis.checked) {
      
        spanMascotaJugador.innerHTML = 'Langostelvis'

    } else if (inputTucapalma.checked) {
      
        spanMascotaJugador.innerHTML = 'Tucapalma'

    } else if (inputPydos.checked) {
       
        spanMascotaJugador.innerHTML = 'Pydos'

    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = Aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipoge'
        //Hipoge
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'capipepo'
        //capipepo
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'ratigueya'
        //ratigueya
    } else if (mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
        //Langostelvis
    } else if (mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
        //Tucapalma
    } else {
        spanMascotaEnemigo.innerHTML = 'Pydos'
        //Pydos
    }

}

function ataqueFuego() {
    ataquejugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}


function ataqueAgua() {
    ataquejugador = 'AGUA'
    ataqueAleatorioEnemigo()
}


function ataqueTierra() {
    ataquejugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = Aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'

    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()

}

function combate() {

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataquejugador) {
        crearMensaje("EMPATE")
    } else if (ataquejugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if (ataquejugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if (ataquejugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

    }

    revisarVidas()
    


}


function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES GANASTE 😊')
    }else if(vidasJugador ==  0){
        crearMensajeFinal('LO SIENTO, PERDISTE 😢')
    }

}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con' + ' ' + ataquejugador + ' ' + ',la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado

    sectionMensajes.appendChild(parrafo)

}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)



    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true


    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}

function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}






window.addEventListener('load', iniciarJuego)
// Hipoge -> agua💧
// Capipepo -> tierra🌱
// Ratigueya -> fuego🔥
// Langostelvis -> agua💧 y fuego🔥
// Tucapalma -> agua💧 y tierra🌱
// Pydos -> tierra🌱 y fuego🔥
