function setupCarousel(carouselId) {
    const container = document.getElementById(carouselId);
    const items = Array.from(container.children);
    const prevButton = document.querySelector(`button[data-carousel="${carouselId}"].landingpage_look_into_section_prev_button`);
    const nextButton = document.querySelector(`button[data-carousel="${carouselId}"].landingpage_look_into_section_next_button`);
    let index = 0;

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth;
        const containerWidth = container.parentElement.offsetWidth;
        const visibleItems = Math.floor(containerWidth / itemWidth);
        const maxIndex = items.length - visibleItems;

        // Ensure index is within bounds
        index = Math.max(0, Math.min(index, maxIndex));
        
        // Apply the translation
        container.style.transform = `translateX(${-index * itemWidth}px)`;

        // Update button states with a slight delay to ensure consistent behavior
        setTimeout(() => {
            prevButton.disabled = index === 0;
            nextButton.disabled = index >= maxIndex;
        }, 50);
    }

    function handleSwipe(direction) {
        if (direction === 'left' && !nextButton.disabled) {
            index++;
        } else if (direction === 'right' && !prevButton.disabled) {
            index--;
        }
        updateCarousel();
    }

    // Detect swipe gestures
    let startX;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    container.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const moveX = e.touches[0].clientX;
        const diffX = startX - moveX;

        if (Math.abs(diffX) > 50) { // Threshold for swipe
            handleSwipe(diffX > 0 ? 'left' : 'right');
            startX = null; // Reset startX to avoid multiple triggers
        }
    });

    updateCarousel();
    window.addEventListener('resize', updateCarousel);

    prevButton.addEventListener('click', () => {
        if (!prevButton.disabled) {
            index--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (!nextButton.disabled) {
            index++;
            updateCarousel();
        }
    });
}

function activateCarousel(productId) {
    // Remove active class from all sections
    document.querySelectorAll('.landingpage_options_sub_section').forEach(landingpage_options_sub_section => {
        landingpage_options_sub_section.classList.remove('active');
    });

    // Add active class to the clicked section
    document.querySelector(`.landingpage_options_sub_section[data-target="${productId}"]`).classList.add('active');

    // Hide all products
    document.querySelectorAll('.landingpage_multiple_product_carousal').forEach(landingpage_multiple_product_carousal => {
        landingpage_multiple_product_carousal.classList.remove('active');
    });

    // Show the selected product
    document.getElementById(productId).classList.add('active');

    // Setup the carousel for the selected product
    setupCarousel(`carousel${productId.slice(-1)}`);
}

// Add click event listeners to all sections
document.querySelectorAll('.landingpage_options_sub_section').forEach(landingpage_options_sub_section => {
    landingpage_options_sub_section.addEventListener('click', () => {
        activateCarousel(landingpage_options_sub_section.dataset.target);
    });
});

// Handle dropdown change
document.getElementById('landingpage_dropdown_options_sub_section').addEventListener('change', (e) => {
    activateCarousel(e.target.value);
});

// Initialize the first product carousel
activateCarousel('product1');

// Initialize dropdown with the first product
document.getElementById('landingpage_dropdown_options_sub_section').value = 'product1';
