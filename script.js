window.onload = () => {
    AOS.init();
    const toggle = document.getElementById('themeToggle');

    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    });

}

window.onscroll = function (e) {
    var navbar = document.getElementsByTagName('nav')[0];
    var header = document.getElementById('landing');

    if (window.scrollY >= header.offsetHeight / 2) {
        navbar.style.opacity = 1
    } else {
        navbar.style.opacity = 0
    }
}

