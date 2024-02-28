// JavaScript code for toggling sections and changing themes

// Function to toggle sections
function toggleSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Function to toggle color palette
function toggleColorPalette() {
    var colorPalette = document.querySelector('.color-palette');
    if (colorPalette.style.display === 'none' || colorPalette.style.display === '') {
        colorPalette.style.display = 'block';
    } else {
        colorPalette.style.display = 'none';
    }
}

// Add event listener to change theme button
document.querySelector('.toggle-color-button').addEventListener('click', function() {
    toggleColorPalette();
});

// Add event listeners to toggle buttons
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        var sectionId = this.getAttribute('data-section-id');
        toggleSection(sectionId);
    });
});

