const opcionesLink = document.querySelector("#opcionesLink"),
    generalLink = document.querySelector("#generalLink"),
    ejecucionLink =document.querySelector("#ejecucionLink")

/*function showGeneral() {
    document.getElementById('general').classList.remove('hidden');
    document.getElementById('options').classList.add('hidden');
}

function showOptions() {
    document.getElementById('options').classList.remove('hidden');
    document.getElementById('general').classList.add('hidden');
}*/

function selectBoton(button){
    console.log(button)
    const buttons = document.querySelectorAll(".menu-button");
    buttons.forEach(btn => {
        btn.classList.remove("selected-link")
    });

    button.classList.add("selected-link");
}

opcionesLink.addEventListener("click", function(e){
    e.preventDefault()
    selectBoton(this)

    document.getElementById('options').classList.remove('hidden');
    document.getElementById('general').classList.add('hidden');
    document.getElementById("ejecucion").classList.add('hidden')
})

generalLink.addEventListener("click", function(e) {
    e.preventDefault()
    selectBoton(this)

    document.getElementById('general').classList.remove('hidden');
    document.getElementById('options').classList.add('hidden');
    document.getElementById("ejecucion").classList.add('hidden')
})

ejecucionLink.addEventListener("click", function(e){
    e.preventDefault()
    selectBoton(this)

    document.getElementById("ejecucion").classList.remove('hidden')
    document.getElementById('options').classList.add('hidden');
    document.getElementById('general').classList.add('hidden');
})