// Function to initialize the gallery
function initializeGallery() {
    console.log('Initializing gallery...'); // Added log for initialization

    // Get all images in the gallery
    const images = document.querySelectorAll('.gallery img');
    
    if (images.length === 0) {
        console.log('No images found in the gallery.');
        return;
    }

    // Add event listeners for focus and blur events
    images.forEach(image => {
        image.addEventListener('focus', () => {
            console.log(`Focused on: ${image.alt}`);
            image.style.borderColor = '#007bff'; // Highlight on focus
        });

        image.addEventListener('blur', () => {
            console.log(`Blurred from: ${image.alt}`);
            image.style.borderColor = '#ddd'; // Remove highlight on blur
        });

        // Ensure the image is focusable
        image.setAttribute('tabindex', '0'); // Add tabindex for focusability
    });

    // Log a message on page load
    window.addEventListener('load', () => {
        console.log('Page has fully loaded');
        addTabFocusAttributes();
    });
}

// Function to add tabindex attributes
function addTabFocusAttributes() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach((image, index) => {
        image.setAttribute('tabindex', index + 1); // Set tabindex dynamically
    });
    console.log('Tabindex attributes added');
}

// Handle mouse movement event (uncomment to enable)
document.addEventListener('mousemove', (event) => {
     console.log(`Mouse moved to: ${event.clientX}, ${event.clientY}`);
});

// Call initializeGallery function on page load
window.addEventListener('load', initializeGallery);
