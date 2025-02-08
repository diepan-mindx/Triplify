
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');

signupLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});

//Prevent form from actually submitting (for this front-end example)
document.getElementById('login-form-actual').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  alert("Login form submitted (front-end only)."); // Placeholder message
});

document.getElementById('signup-form-actual').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  alert("Sign up form submitted (front-end only)."); // Placeholder message
});