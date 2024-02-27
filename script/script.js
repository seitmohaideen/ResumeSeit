// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

/*seit Added*/
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-level-bar');
    
    skillBars.forEach(skillBar => {
        const skillPercent = skillBar.getAttribute('data-percent');
        skillBar.style.width = skillPercent;
        // Triggering the animation by accessing the offsetWidth
        skillBar.offsetWidth;
        skillBar.style.width = skillPercent;
    });
});
