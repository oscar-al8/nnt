const toggleNav = () =>{
    document.getElementById('navi-toggle').click();
}

const togglePopup = () => {
    document.getElementById('popup').classList.toggle('show');
    document.getElementById('popup-content').classList.toggle('show-content');
}

document.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', toggleNav);
});

document.querySelectorAll('.show-book').forEach(link => {
    link.addEventListener('click', togglePopup);
});

document.getElementById('popup-close').addEventListener('click', togglePopup);

