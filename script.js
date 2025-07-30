function registration(event) {
    event.preventDefault();

    const fname = document.getElementById('firstname').value;
    const lname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('emailid').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const emailCheckbox = document.getElementById('emails').checked;
    const termsCheckbox = document.getElementById('terms').checked;

    // Validate required fields
    switch (true){
        case !fname:
            alert('Please enter your firstname');
            return;
        case !lname:
            alert('Please enter your lastname');
            return;
        case !phone:
            alert('Please enter your phone number');
            return;
        case !email:
            alert('Please enter your email');
            return;
        case !password:
            alert('Please enter your password');
            return;
        case !confirmPassword:
            alert('Please confirm your password');
            return;
        case !termsCheckbox:
            alert('Please accept the terms and conditions');
            return;
        default:
            break;
    }

    alert(`Registration successful! Thank you ${fname} ${lname} for registering with us.`);
    
     // Clear form after successful registration
    document.querySelector('form').reset();
    document.getElementById('confirm-password').style.border = '1px solid #ccc';
    document.getElementById('password-message').style.display = 'none';
}

// Real-time password matching function
function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageElement = document.getElementById('password-message');
    const confirmField = document.getElementById('confirm-password');

    if (confirmPassword.length === 0) {
        messageElement.style.display = 'none';
        confirmField.style.border = '1px solid #ccc';
        return true;
    }

    if (password === confirmPassword) {
        messageElement.style.display = 'block';
        messageElement.style.color = 'green';
        messageElement.textContent = 'Passwords match';
        confirmField.style.border = '2px solid green';
        return true;
    } else {
        messageElement.style.display = 'block';
        messageElement.style.color = 'red';
        messageElement.textContent = 'Passwords do not match';
        confirmField.style.border = '2px solid red';
        return false;
    }
}

