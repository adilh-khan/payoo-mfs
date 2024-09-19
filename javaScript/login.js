// Step-1: Set Event Handler
document.getElementById('button-login')
.addEventListener('click', function(event){
    // Step-2: Prevent default behaviour (prevent loading browser)
    event.preventDefault();
    console.log('Login Button Click');
    // Step-3: Get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})

