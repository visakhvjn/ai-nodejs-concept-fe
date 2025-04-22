async function fetchAndDisplayConcept() {
  try {
    const response = await fetch('https://ai-nodejs-concept-be.onrender.com/concept');
    const htmlContent = await response.text();
    document.getElementById('conceptBox').innerHTML = htmlContent;
  } catch (error) {
    console.error('Error fetching concept:', error);
    document.getElementById('conceptBox').innerText = 'Failed to load concept.';
  }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchAndDisplayConcept);
