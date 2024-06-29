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
Form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const email = Form.querySelector('#email')
    UpdateSuccessMessage(email.value)
    SwitchContent()
})

dismiss.addEventListener("click", () => {
    SwitchContent()
    UpdateSuccessMessage("")

})
