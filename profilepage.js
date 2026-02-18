document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.profile-links a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const action = link.textContent.trim();
            switch (action) {
                case 'Edit Profile':
                    alert('Edit profile functionality coming soon!');
                    // could redirect to an edit form, e.g. window.location.href = 'edit.html';
                    break;
                case 'Settings':
                    alert('Settings page not yet implemented.');
                    break;
                case 'Log Out':
                    // simulate log out by showing message and maybe returning to login
                    alert('You have been logged out.');
                    window.location.href = 'index.html';
                    break;
                default:
                    console.log('Unknown action', action);
            }
        });
    });
});
