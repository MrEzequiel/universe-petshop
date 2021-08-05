const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('.toggle')
const lists = document.querySelectorAll('.menu ul li')

toggle.forEach(button => {
  button.addEventListener('click', event => {
    nav.classList.toggle('show')
  })
})

lists.forEach(list => {
  list.addEventListener('click', event => {
    nav.classList.remove('show')
  })
})

const header = document.querySelector('#header')

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY

  if (scrollPosition > 100) {
    header.style.boxShadow = '0 3px 5px rgb(57, 63, 72, 0.3)'
  } else {
    header.style.boxShadow = 'none'
  }
})

const showAlert = input => {
  input.style.animation = 'move 250ms 3'
  input.focus()
  setTimeout(() => {
    input.style.animation = ''
  }, 1000)
}

const validForm = event => {
  event.preventDefault()

  let inputName = document.querySelector('#name')
  let inputPhone = document.querySelector('#phone')
  let inputEmail = document.querySelector('#email')
  let inputMessage = document.querySelector('#message')

  if (inputName.value == '') {
    showAlert(inputName)
    return 0
  }
  if (inputPhone.value == '') {
    showAlert(inputPhone)
    return 0
  }
  if (inputEmail.value == '') {
    showAlert(inputEmail)
    return 0
  }
  if (inputMessage.value == '') {
    showAlert(inputMessage)
    return 0
  }

  inputName.value = ''
  inputPhone.value = ''
  inputEmail.value = ''
  inputMessage.value = ''
}

const buttonForm = document
  .querySelector('.button-form')
  .addEventListener('click', validForm)

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
    #services .card-equal, #services .card-diff,
    #about .text, #about .image,
    #contact .form, #contact .input,
    #footer .maps, #footer .social
    `,
  { interval: 100 }
)
