window.onload = () => {    
    AOS.init();    
}

window.onscroll = function (e)
{
    var navbar = document.getElementsByTagName('nav')[0];
    var header = document.getElementById('landing');

    if (window.scrollY >= header.offsetHeight/2) {
        navbar.style.opacity = 1
    } else {
        navbar.style.opacity = 0
    }
}

/*
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('theme-toggle');

    // Check the saved theme from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    // Event listener for the toggle switch
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
*/
