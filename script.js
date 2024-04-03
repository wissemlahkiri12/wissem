document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle-menu button and menu
    const toggleMenuBtn = document.getElementById('toggle-menu');
    const menu = document.querySelector('.menu');

    // Add event listener to toggle-menu button
    toggleMenuBtn.addEventListener('click', function() {
        // Toggle the 'active' class to change the button icon to X
        toggleMenuBtn.classList.toggle('active');

        // Toggle the 'show' class to display or hide the menu
        menu.classList.toggle('show');

        // Change the button icon based on menu visibility
        if (menu.classList.contains('show')) {
            toggleMenuBtn.innerHTML = "&#10005;"; // Change to close icon (X)
        } else {
            toggleMenuBtn.innerHTML = "&#9776;"; // Change back to menu icon
        }
    });
});
