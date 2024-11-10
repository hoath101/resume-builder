// Get the button and the content section elements
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const contentSection = document.getElementById('content') as HTMLDivElement;

// Function to toggle visibility
function toggleVisibility() {
  if (contentSection.style.display === 'none') {
    contentSection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills'; // Change button text
  } else {
    contentSection.style.display = 'none';
    toggleButton.textContent = 'Show Skills'; // Change button text
  }
}

// Attach event listener to the button
toggleButton.addEventListener('click', toggleVisibility);
