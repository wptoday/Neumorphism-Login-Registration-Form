let switchCtn = document.querySelector('#switch-cnt')
let switchc1 = document.querySelector('#switch-c1')
let switchc2 = document.querySelector('#switch-c2')
let switchCircle = document.querySelectorAll('.switch__circle')
let switchBtn = document.querySelectorAll('.switch__button')
let aContainer = document.querySelector('#a-container')
let bContainer = document.querySelector('#b-container')
let submitButtons = document.querySelectorAll('.form__button')

function getButtons(e) {
  e.preventDefault()
}

function changeForm(e) {
  switchCtn.classList.add('is-gx')
  setTimeout(function () {
    switchCtn.classList.remove('is-gx')
  }, 1500)

  switchCtn.classList.toggle('is-txr')
  switchCircle[0].classList.toggle('is-txr')
  switchCircle[1].classList.toggle('is-txr')

  switchc1.classList.toggle('is_hidden')
  switchc2.classList.toggle('is_hidden')

  aContainer.classList.toggle('is-txl')
  bContainer.classList.toggle('is-txl')
  bContainer.classList.toggle('is-z200')
}

function mainFunction(e) {
  for (let i = 0; i < submitButtons.length; i++) {
    submitButtons[i].addEventListener('click', getButtons)
  }

  for (let i = 0; i < switchBtn.length; i++) {
    switchBtn[i].addEventListener('click', changeForm)
  }
}

window.addEventListener('load', mainFunction)
