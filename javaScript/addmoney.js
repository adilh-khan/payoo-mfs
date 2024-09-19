document.getElementById('btn-addmoney')
    .addEventListener('click', function(event){
        event.preventDefault();
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);
        if(pinNumberInput === '1234'){
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);
            const balanceNumber = parseFloat(balance);
            const addMoneyNumber = parseFloat(addMoneyInput);
            const newBalance = balanceNumber + addMoneyNumber;
            console.log(newBalance);
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Wrong PIN Error! Try Again')
        }
    })
