

let nao = document.getElementById("nao")
let body = document.getElementsByTagName('body')[0];
let sim = document.getElementById('sim')
let title = document.getElementById('title')
let confetti = document.getElementsByClassName('confetti')[0];
let text = document.getElementsByClassName("text")[0];
let blocks = document.getElementsByClassName('blocks')[0];

function noJumping(){
    nao.style.position = 'absolute'
    nao.style.left = (Math.random() * 80) + "%"
    nao.style.top = (Math.random() * 80) + "%"
}

function aceitar(){
    sim.style.display = 'none'
    title.style.display = 'none'
    nao.style.display = 'none'
    body.style.backgroundImage = 'url("../assets/imgs/17_1.jpg")';
    body.style.backgroundColor = '#96a0d9'
    confetti.style.display = 'block'
    setTimeout(() => {
        confetti.style.opacity = 0;
        setTimeout(() => {
            confetti.style.display = 'none'
        }, 200)
    }, 1800)
    text.style.display = 'block'
    blocks.style.display = 'flex'


let nao = document.getElementById("nao")
let body = document.getElementsByTagName('body')[0];
let sim = document.getElementById('sim')
let title = document.getElementById('title')
let confetti = document.getElementsByClassName('confetti')[0];
let text = document.getElementsByClassName("text")[0];
let blocks = document.getElementsByClassName('blocks')[0];
}

function noJumping(){
    nao.style.position = 'absolute'
    nao.style.left = (Math.random() * 80) + "%"
    nao.style.top = (Math.random() * 80) + "%"
}

function aceitar(){
    sim.style.display = 'none'
    title.style.display = 'none'
    nao.style.display = 'none'
    body.style.backgroundImage = 'url("../assets/imgs/17_1.jpg")';
    body.style.backgroundColor = '#96a0d9'
    confetti.style.display = 'block'
    setTimeout(() => {
        confetti.style.opacity = 0;
        setTimeout(() => {
            confetti.style.display = 'none'
        }, 200)
    }, 1800)
    text.style.display = 'block'
    blocks.style.display = 'flex'

}