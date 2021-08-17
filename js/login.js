
function inputCollection(inputId) {
    const inputDataField = document.getElementById(inputId);
    const inputData = inputDataField.value;
    return inputData;
}

const clickButton = document.getElementById('login-submit').addEventListener('click', function () {
    const email = inputCollection('user-email');
    const password = inputCollection('user-password');
    if (email == 'nipa@gmail.com' && password == '735597') {
        window.location.href = 'banking.html';
    }
    else {
        // alert('your password is not correct');
        const errorMessage = document.getElementById('error');
        errorMessage.style.display = 'block';
    }


});