// MEU PRIMEIRO BLOCO
let bl = window.document.getElementById('bl1')

function blbr() {
    bl.innerText = 'Bloco 1'
    bl.style.background = 'orange'
}

  function entrar() {
    bl.innerText = 'Chegada'
    bl.style.background = 'white'
}

   function sair() {
    bl.innerText = 'Sair'
    bl.style.background = 'lightblue'
}

//-MEU SEGUNDO BLOCO-------------------

let blc = window.document.getElementById('bl2')

  function blbs() {
    blc.innerText = 'Bloco '
    blc.style.background = 'lightgreen'
}

   function home() {
    blc.innerText = 'Chegada'
    blc.style.background = 'white'
}

   function out() {
    blc.innerText = 'Sair'
    blc.style.background = 'black'

}

//- MEU TERCEIRO BLOCO--------------------------

let bld = window.document.getElementById('bl3')

function blbt() {
    bld.innerHTML = '<strong>Seja bem vindo!</strong>'
    bld.style.background = 'yellow'
}

function inicio() {
    bld.innerHTML = '... <strong>CLIQUE</strong>  !'
    bld.style.background = 'red'
}

function terminado() {
    bld.innerText = 'Tchau..!'
    bld.style.background ='gray'
    bld.style.color = 'black'
}