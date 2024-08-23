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