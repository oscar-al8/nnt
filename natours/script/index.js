const toggleNav = () =>{
    document.getElementById('navi-toggle').click();
}

const togglePopup = () => {
    document.getElementById('popup').classList.toggle('show');
    document.getElementById('popup-content').classList.toggle('show-content');
}
document.getElementById('popup-close').addEventListener('click', togglePopup);

const togglePopupFull = (e) => {
    if(e.target.id == 'popup'){
        togglePopup();
    }
}
document.getElementById('popup').addEventListener('click', togglePopupFull);

document.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', toggleNav);
});

document.querySelectorAll('.show-book').forEach(link => {
    link.addEventListener('click', togglePopup);
});