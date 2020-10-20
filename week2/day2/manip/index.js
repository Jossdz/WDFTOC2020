// console.log('ihe')
// const $title = document.querySelector('h1')
// let lolAtr = $title.getAttribute('lol')
// $title.setAttribute('lol', 'Ironhack')
// $title.setAttribute('ironhack', 'saeh')
// lolAtr = $title.getAttribute('lol')
// console.log(lolAtr)
// $title.removeAttribute('lol')
// const $html = document.querySelector('html')
// $html.setAttribute('lang', 'es')

// // const $noEx = document.querySelector('ilyge')

// let $h2Tag = document.createElement('h2')
// // $h2Tag.innerText = 'Hola mundo'
// const h2Text = document.createTextNode('Hola mundo')
// $h2Tag.appendChild(h2Text)
// console.log($h2Tag)

const $body = document.querySelector('body')

// $body.appendChild($h2Tag)

// // 

// const $p = document.createElement('p')
// const pText = document.createTextNode('Hi there! I am  using js')
// $p.appendChild(pText)
// // 👇padre-nuevo hijo👇    👇 Elemento destino
// $body.insertBefore( $p, $h2Tag)

// $body.removeChild($h2Tag)
// //👆 padre     hijo 👆

function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// TODO: 1. Crear el boton
const $button = document.createElement('button')
$button.innerText = 'Change color'
// TODO: 2. agregar el boton al body
$body.appendChild($button)
// TODO: 3. hacer algo cuando se ejecuta el evento
$button.onclick = function(){
  $body.style.backgroundColor = generateRandomColor()
}

// let len = 5

// function addItem(){
//   const $li = document.createElement('li')
//   $li.innerText = `Item number ${len + 1}`
//   const $list = document.querySelector('#items-list')
//   $list.appendChild($li)
//   len++
// }

// const $addItemBtn = document.querySelector('#add-item-button')

// $addItemBtn.onclick = addItem

// function addItem(){
//   const $li = document.createElement('li')
//   const len = document.querySelectorAll('#items-list li').length
//   $li.innerText = `Item number ${len + 1}`
//   const $list = document.querySelector('#items-list')
//   $list.appendChild($li)
// }

// const $addItemBtn = document.querySelector('#add-item-button')

// $addItemBtn.onclick = addItem


const $itemInput = document.querySelector('input')
const $itemBtn = document.querySelector('#add-item-btn')


$itemBtn.onclick = function(event){
  // console.log(this)
  console.log(event.target)
  const $li = document.createElement('li')
  $li.innerText = $itemInput.value
  const $list = document.querySelector('#items-list')
  $list.appendChild($li)
  $itemInput.value = ''
}