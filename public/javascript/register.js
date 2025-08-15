document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const role = document.getElementById('register-role').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    };

    try {
        const response = fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
                role
            })
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            window.location.href = '/login'; // Redirect to login page after successful registration
        } else {
            alert(data.message || 'Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred. Please try again later.');
    }
});

