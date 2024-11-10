// Get the button and the content section elements
var toggleButton = document.getElementById('toggleButton');
var contentSection = document.getElementById('content');
// Function to toggle visibility
function toggleVisibility() {
    if (contentSection.style.display === 'none') {
        contentSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills'; // Change button text
    }
    else {
        contentSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills'; // Change button text
    }
}
// Attach event listener to the button
toggleButton.addEventListener('click', toggleVisibility);
