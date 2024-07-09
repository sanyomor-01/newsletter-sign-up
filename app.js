const Form = document.getElementById('form')
const Email = document.getElementById('submitted-email')
const Signup = document.getElementById('sign-up')
const success = document.getElementById('success')
const dismiss = document.querySelector('#dismiss')



function UpdateSuccessMessage(email) {
    Email.textContent = email
}

function SwitchContent() {
    Signup.classList.toggle('active')
    success.classList.toggle('active')
}

function isValidEntry(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase());
}

function displayErrors() {
    const ErrorMsg = document.querySelector('.error-msg')
    const input = document.getElementById('email')

    input.classList.add('error')
    ErrorMsg.classList.remove('hidden')
}

Form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const email = Form.querySelector('#email')
    const valid = isValidEntry(email.value)

    if(!valid){
        return displayErrors()
    }
    if(valid){
        UpdateSuccessMessage(email.value)
        SwitchContent()
    }
})

dismiss.addEventListener("click", () => {
    SwitchContent()
    UpdateSuccessMessage("")

})
