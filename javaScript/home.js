// Add money to the account
// Step-1: Add an event handler to the Add Money Button inside the form
document.getElementById('btn-addmoney')
    .addEventListener('click', function(event){
        //Prevent page reload after submit
        event.preventDefault();

        // Step-2: Get money to be added to the account balance &&
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        // Get the pin number
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);

        // Step-3: Verify Pin Number
        // Wrong way to validate PIN Number?
        if(pinNumberInput === '1234'){
            console.log('Adding money to your account');

            // Step-4: Get the Current Balance
            const balance = document.getElementById('account-balance').innerText;
            console.log(typeof balance);

            // Step-5: Add addMoneyInput with balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            console.log(typeof balanceNumber);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);
            
            // Step-6: Update the balance in the DOM
            document.getElementById('account-balance').innerText = newBalance;  
        }
        else{
            alert('Failed to add money, please try again');
        }

    })