const Form = document.querySelector('#form')
const input = document.querySelector('input')
const ErrorMsg = document.querySelector('.error')
const userEmail = document.querySelector('.user-email')
const Success = document.querySelector('.success')



function isValidEmail(str) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(str).toLowerCase());
}


/* Prevent default browser behavior*/
Form.addEventListener('submit', (e) => {
     e.preventDefault()
    
    const email = input.value
    if(!isValidEmail(email)) {
            ErrorMsg.textContent = 'Valid email required'
            input.classList.add('error-state')
        }

    
    if(isValidEmail(email)) {
        input.value = ''
        userEmail.textContent = `${input.value}`
        Success.classList.toggle('hidden')

        /// . the success message should show
        //email of user should be update in the success message
        //email in the input should reset to nothing
    }
})