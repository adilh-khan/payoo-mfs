document.getElementById('btn-cashout')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('Cash Out')
        const outMoneyInput = document.getElementById('input-out-money').value;
        console.log(outMoneyInput);
        const pinNumberInput = document.getElementById('input-cashout-pin').value;
        console.log(pinNumberInput);
        if(pinNumberInput === "1234"){
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);
            const balanceNumber = parseFloat(balance);
            const addMoneyNumber = parseFloat(outMoneyInput);
            const newBalance = balanceNumber - outMoneyInput;
            console.log(newBalance);
            document.getElementById('account-balance').innerText = newBalance;  
        }
        else{
            alert('Error PIN, Try Again!')
        }
    })