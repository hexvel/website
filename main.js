function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
}