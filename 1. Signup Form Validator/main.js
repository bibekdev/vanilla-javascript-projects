const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

const showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

const showSuccess = input => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

const checkEmail = input => {
  const validator =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (validator.test(input.value.trim())) showSuccess(input)
  else showError(input, 'Email is not valid')
}

const checkPassword = (input1, input2) => {
  if (input1.value !== input2.value) showError(input2, 'Password do not match')
}

const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

const checkValidation = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '')
      showError(input, `${getFieldName(input)} is required.`)
    else showSuccess(input)
  })
}

form.addEventListener('submit', e => {
  e.preventDefault()
  checkValidation([username, email, password, confirmPassword])
  checkEmail(email)
  checkPassword(password, confirmPassword)
})
