let listaImagens = [
    'assets/imgs/IMG-20241023-WA0045.jpg',
    'assets/imgs/IMG-20241023-WA0075.jpg',
    'assets/imgs/IMG-20241023-WA00371.jpg',
    'assets/imgs/IMG-20241107-WA0028.jpg',
    'assets/imgs/IMG-20241118-WA0021.jpg',
    'assets/imgs/IMG-20251021-WA0273.jpg',
    'assets/imgs/IMG-20251021-WA0274.jpg',
    'assets/imgs/IMG-20251021-WA0276.jpg',
    'assets/imgs/IMG-20251021-WA0292.jpg',
    'assets/imgs/IMG-20251021-WA0298.jpg'
]

let index = 0;
let atual = 0

let polaroid1 = document.getElementById('polaroid1')
let polaroid2 = document.getElementById('polaroid2')

let photo1 = polaroid1.getElementsByTagName('img')[0]
let photo2 = polaroid2.getElementsByTagName('img')[0]

photo1.src = listaImagens[index]

console.log(photo1, photo2)

function nextPhoto(){
    index += 1;
    console.log(index)
    if(index >= listaImagens.length){
        index = 0
    }
    if (atual == 0){
    atual = 1
    photo2.src = listaImagens[index]
    polaroid1.style.animation = 'goLeft 1s forwards ease-in-out'
    polaroid2.style.animation = 'comeLeft 1s forwards ease-in-out'
    setTimeout(() => {
        polaroid1.style.display = 'none';
        polaroid2.style.display = 'flex';
    }, 700)
    } else {
    atual = 0
    photo1.src = listaImagens[index]
    polaroid2.style.animation = 'goLeft 1s forwards ease-in-out'
    polaroid1.style.animation = 'comeLeft 1s forwards ease-in-out'
    setTimeout(() => {
        polaroid2.style.display = 'none';
        polaroid1.style.display = 'flex';
    }, 700)
    }
}

function previousPhoto(){
    if(index == 0){
        index = listaImagens.length - 1
    } else{
        index -= 1;
    }
    console.log(index)
    if (atual == 0){
    atual = 1
    photo2.src = listaImagens[index]
    polaroid1.style.animation = 'goRight 1s forwards ease-in-out'
    polaroid2.style.animation = 'comeRight 1s forwards ease-in-out'
    setTimeout(() => {
        polaroid1.style.display = 'none';
        polaroid2.style.display = 'flex';
    }, 700)
    } else {
    atual = 0
    photo1.src = listaImagens[index]
    polaroid2.style.animation = 'goRight 1s forwards ease-in-out'
    polaroid1.style.animation = 'comeRight 1s forwards ease-in-out'
    setTimeout(() => {
        polaroid2.style.display = 'none';
        polaroid1.style.display = 'flex';
    }, 700)
    }
}