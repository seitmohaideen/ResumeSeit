// Function to handle the toggle color button
    function toggleColorPalette() {
        const colorPalette = document.querySelector('.color-palette');
        colorPalette.style.display = (colorPalette.style.display === 'block') ? 'none' : 'block';
    }

    // Function to apply color on click
    function applyColor(color) {
        document.body.style.backgroundColor = color;
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Toggle color palette on click
        document.querySelector('.toggle-color-button').addEventListener('click', toggleColorPalette);

        // Apply color on click
        document.querySelectorAll('.color-button').forEach(button => {
            button.addEventListener('click', function () {
                applyColor(this.style.backgroundColor);
            });
        });

        // Toggle sections on click
        document.querySelectorAll('.toggle-button').forEach(button => {
            button.addEventListener('click', function () {
                const sectionId = this.getAttribute('data-section-id');
                const section = document.getElementById(sectionId);
                document.querySelectorAll('section').forEach(sec => {
                    sec.style.display = 'none';
                });
                section.style.display = 'block';
            });
        });
    });
