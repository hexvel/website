window.addEventListener("scroll",function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', this.window.scrollY > 0);
});

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}


function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
}
