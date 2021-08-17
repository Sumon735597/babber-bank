const depositButton = document.getElementById('deposit-button');
const withdrawButton = document.getElementById('withdraw-button');

depositButton.addEventListener('click', function () {
    transactionAccount('deposit');
});

withdrawButton.addEventListener('click', function () {
    // const withDrawFeild = document.getElementById('withdraw-total');
    // const withDrawTotal = parseFloat(withDrawFeild.innerText);

    // const inputWithDrawFeild = document.getElementById('withdraw-input');
    // const inputWithDrawTotal = parseFloat(inputWithDrawFeild.value);

    // withDrawFeild.innerText = withDrawTotal + inputWithDrawTotal;
    // inputWithDrawFeild.value = '';

    // const balanceFeild = document.getElementById('balance-total');
    // const balanceTotal = parseFloat(balanceFeild.innerText);

    // balanceFeild.innerText = balanceTotal - inputWithDrawTotal;
    transactionAccount('withdraw');

})


function transactionAccount(type) {
    //text taka
    const previoustotal = document.getElementById(`${type}-total`);
    const previousTotalNumber = parseFloat(previoustotal.innerText);

    //input feild
    const inputMoney = document.getElementById(`${type}-input`);
    const inputMoneyNumber = parseFloat(inputMoney.value);
    //common operation
    inputMoney.value = '';
    previoustotal.innerText = previousTotalNumber + inputMoneyNumber;
    //balance operation

    const balanceFeild = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceFeild.innerText);

    if (type == 'deposit') {
        balanceFeild.innerText = balanceTotal + inputMoneyNumber;
    }
    else {
        balanceFeild.innerText = balanceTotal - inputMoneyNumber;
    }

}