const Form = document.querySelector('#form')
const input = document.querySelector('input')
const ErrorMsg = document.querySelector('.error')
const userEmail = document.querySelector('.user--email')
const Success = document.querySelector('.success')
const dismissBtn = document.querySelector('.dismiss-btn')
const mainPage = document.querySelector('.card')



function isValidEmail(str) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(str).toLowerCase());
}


/* Prevent default browser behavior*/
Form.addEventListener('submit', (e) => {
     e.preventDefault()
    const email = input.value

    if(email === '' || !isValidEmail(email)) {
            ErrorMsg.textContent = 'Valid email required'
            input.classList.add('error-state')
        }

    else{
        userEmail.textContent = `${input.value}`
        mainPage.style.display = `none`
        Success.classList.toggle('hidden')
    }
})
//dismiss button functionality
dismissBtn.addEventListener('click', () => {
    Success.style.display = `none`
    input.value = ''
    mainPage.style.display = `block`

})