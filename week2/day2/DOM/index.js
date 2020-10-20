// console.log(document)

// // 1. necesitamos traer el elemento con ID cat 
// const $catContainer = document.getElementById('cat')
// // 2. necesitamos agregar contenido a ese nodo
// $catContainer.innerHTML = '<b>Cat</b>'
// // $catContainer.innerText = 'Cat'
// const $mice = document.getElementsByClassName('mouse')

// for(let i = 0; i<$mice.length;i++){
//   $mice[i].innerText = 'Mouse'
// }


const $catContainer = document.querySelector('#cat')
$catContainer.innerHTML = '<b>Cat</b>'

const $mice = document.querySelectorAll('.mouse')

$mice.forEach(mouse => mouse.innerText = 'Mouse')

const $hello = document.querySelector('.hello')

console.log($hello);

$hello.classList.add('mouse')
$hello.classList.remove('hello')

console.log($hello.className);