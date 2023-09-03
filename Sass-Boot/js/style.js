document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('emailLogin');
    const passwordInput = document.getElementById('passLogin');
    const loginButton = document.querySelector('.btn1'); // Updated selector
    const emailLog = document.querySelector('.email-Log');
    const passwordLog = document.querySelector('.password-Log');

    passwordLog.style.fontSize='small';
    emailLog.style.fontSize='small';
    passwordLog.style.position='absolute';
    passwordLog.style.top='50px';
    emailLog.style.position='absolute';
    emailLog.style.top='157px';

    loginButton.addEventListener('click', function (event) {
        let hasError = false;

        if (emailInput.value.trim() === '') {
            event.preventDefault();
            emailLog.textContent = "Please enter your Email.";
            emailLog.style.color = 'red';
            hasError = true;
        } else {
            emailLog.textContent = '';
        }

        if (passwordInput.value.trim() === '') {
            event.preventDefault();
            passwordLog.textContent = "Please enter your Password.";
            passwordLog.style.color = 'red';
            hasError = true;
        } else {
            passwordLog.textContent = '';
        }

        if (hasError) {
            // Prevent the form submission
            return false;
        }
    });
});
