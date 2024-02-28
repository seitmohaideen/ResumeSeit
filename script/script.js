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
