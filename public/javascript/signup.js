// Completed by Derimar Gray on 9/22, updated by Rob Atalla on 9/23 @ 1338
const container = document.getElementById('container');

const signUpButton = document.getElementById('signUp');
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-input-signup').value.trim();
    const email = document.querySelector('#email-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) 
        { document.location.replace('/'); } 
        else { alert(response.statusText); }
    }}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);