let ataquejugador = ""
let ataqueEnemigo = ""

    function iniciarjuego() {
        let botonMascotaJugador = document.getElementById('boton-mascota')
        botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.addEventListener('click', ataqueFuego)

        let botonAgua = document.getElementById('boton-agua')
        botonAgua.addEventListener('click', ataqueAgua)

        let botonTierra = document.getElementById('boton-tierra')
        botonTierra.addEventListener('click', ataqueTierra)
        seleccionarMascotaJugador()
    }

function seleccionarMascotaJugador() {
    let inputHipoge = document.getElementById('Hipoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')

    let spanMascotaJugador = document.getElementById('mascota-jugador')



    if (inputHipoge.checked) {
        alert("selecionaste a Hipoge")
        spanMascotaJugador.innerHTML = '2'

    } else if (inputCapipepo.checked) {
        alert("seleccionaste a Capipepo")

    } else if (inputRatigueya.checked) {
        alert("seleccionaste a Ratigueya")

    } else if (inputLangostelvis.checked) {
        alert("seleccionaste a Langostelvis")

    } else if (inputTucapalma.checked) {
        alert("seleccionaste a Tucapalma")

    } else if (inputPydos.checked) {
        alert("seleccionaste a Pydos")

    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaeAleatoria = Aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaeAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipoge'
        //Hipoge
    } else if (mascotaeAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'capipepo'
        //capipepo
    } else if (mascotaeAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'ratigueya'
        //ratigueya
    } else if (mascotaeAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
        //Langostelvis
    } else if (mascotaeAleatoria == 5) {
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

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = Aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'

    }else{
        ataqueEnemigo = 'TIERRA'
    }

    crearMensaje()
    
}

function combate(){
    if (ataqueEnemigo ==  ataquejugador){
        crearMensaje("EMPATE")
    }else if (ataquejugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
    }else if (ataquejugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
    }else if (ataquejugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
    }else{
        crearMensaje("PERDISTE")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con'+ ' '+ataquejugador+' '+',la mascota del enemigo ataco con '+ataqueEnemigo+' - '+ resultado

    sectionMensajes.appendChild(parrafo)

}

function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}





let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener('click', iniciarjuego)



// Hipoge -> agua💧
// Capipepo -> tierra🌱
// Ratigueya -> fuego🔥
// Langostelvis -> agua💧 y fuego🔥
// Tucapalma -> agua💧 y tierra🌱
// Pydos -> tierra🌱 y fuego🔥
