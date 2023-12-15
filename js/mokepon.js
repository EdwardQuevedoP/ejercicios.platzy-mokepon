let ataquejugador = ""
let ataqueEnemigo

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
    let ataqueAleatorio = Aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipoge'
        //Hipoge
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'capipepo'
        //capipepo
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'ratigueya'
        //ratigueya
    } else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
        //Langostelvis
    } else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
        //Tucapalma
    } else if (ataqueAleatorio == 6) {
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
    Aleatorio
    ataqueEnemigo
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
