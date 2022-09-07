document.getElementById('send').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    localStorage.setItem('name', nameValue);

    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    localStorage.setItem('email', emailValue);

    const messageField = document.getElementById('message-field');
    const messageValue = messageField.value;
    localStorage.setItem('message', messageValue);

})

document.getElementById('send-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    localStorage.setItem('name', nameValue);
})

document.getElementById('send-email').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;

    localStorage.setItem('email', emailValue);
})

document.getElementById('send-message').addEventListener('click', function () {
    const messageField = document.getElementById('message-field');
    const messageValue = messageField.value;

    localStorage.setItem('message', messageValue);
})

document.getElementById('delete-name').addEventListener('click', function () {
    localStorage.removeItem('name');
})

document.getElementById('delete-email').addEventListener('click', function () {
    localStorage.removeItem('email');
})

document.getElementById('delete-message').addEventListener('click', function () {
    localStorage.removeItem('message');
})

document.getElementById('reset').addEventListener('click', function () {
    localStorage.clear();
})




