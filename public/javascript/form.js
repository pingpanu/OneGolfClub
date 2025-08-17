"use strict";

const formTemplates = {
    signInForm: `
        <div id="signInForm" class="auth-form" onclick="event.stopPropagation()">
            <h3>Sign In</h3>
            <form id="signin-form" onsubmit="handleSignIn(event)">
                <div class="form-group">
                    <label for="signin-email">Email:</label>
                    <input type="email" id="signin-email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="signin-password">Password:</label>
                    <input type="password" id="signin-password" name="password" required>
                </div>
                <button type="submit" class="btn btn-green">Sign In</button>
                <p><a href="#" onclick="showForm('forgotPasswordForm'); event.preventDefault();">Forgot Password?</a></p>
                <p>Don't have an account? <a href="#" onclick="showForm('registerForm'); event.preventDefault();">Register here</a></p>
            </form>
            <button class="close-btn" onclick="hideForms()">X</button>
        </div>
    `,
    registerForm: `
        <div id="registerForm" class="auth-form" onclick="event.stopPropagation()">
            <h3>Register</h3>
            <form>
                <div class="form-group">
                    <label for="register-name">Full Name:</label>
                    <input type="text" id="register-name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="register-email">Email:</label>
                    <input type="email" id="register-email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="register-password">Password:</label>
                    <input type="password" id="register-password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="register-confirm-password">Confirm Password:</label>
                    <input type="password" id="register-confirm-password" name="confirm_password" required>
                </div>
                <button type="submit" class="btn btn-green">Register</button>
                <p>Already have an account? <a href="#" onclick="showForm('signInForm'); event.preventDefault();">Sign In</a></p>
            </form>
            <button class="close-btn" onclick="hideForms()">X</button>
        </div>
    `,
    forgotPasswordForm: `
        <div id="forgotPasswordForm" class="auth-form" onclick="event.stopPropagation()">
            <h3>Forgot Password</h3>
            <form>
                <div class="form-group">
                    <label for="forgot-email">Enter your email:</label>
                    <input type="email" id="forgot-email" name="email" required>
                </div>
                <button type="submit" class="btn btn-green">Reset Password</button>
                <p>Remember your password? <a href="#" onclick="showForm('signInForm'); event.preventDefault();">Sign In</a></p>
            </form>
            <button class="close-btn" onclick="hideForms()">X</button>
        </div>
    `
};

window.showForm = function(formId) {
    const overlay = document.getElementById('formsOverlay');
    console.log(`Requested form = ${formId}`);
    console.log(`Form HTML = ${formTemplates[formId]}`);
    overlay.style.display = 'flex';
    overlay.innerHTML = formTemplates[formId] || '';
}

window.hideForms = function() {
    const overlay = document.getElementById('formsOverlay');
    overlay.style.display = 'none';
    overlay.innerHTML = '';
}

window.handleSignIn = function(event) {
    event.preventDefault();

    const user_email = document.getElementById('signin-email').value;
    const user_password = document.getElementById('signin-password').value;

    const validUser = "useruser@hotmail.com";
    const validPassword = "password";

    if (user_email === validUser && user_password === validPassword) {
        window.location.href = "/user.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-form]').forEach(button => {
        button.addEventListener('click', function () {
            const formId = this.getAttribute('data-form');
            showForm(formId);
        });
    });

    document.getElementById('formsOverlay').addEventListener('click', hideForms);
});

