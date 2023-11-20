document.getElementById('login-button').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple example of username and password validation
    if (
(username === 'Dexter' && password === '120722') ||
(username === 'Ricky' && password === 'Gacutan') ||
(username === 'Waljo' && password === 'Minerva') ||
(username === 'Admin' && password === 'Admin')
) {
// Redirect to the payroll page after successful login
window.location.href = 'payroll.html';
} else {
alert('Invalid username or password. Please try again.');
}

  });