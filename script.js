function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const menu = document.getElementById('mobileMenu');
    const currentScroll = window.pageYOffset;


    if (menu && !menu.classList.contains('hidden')) return;

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-110%)'; 
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Data for the automated loops
const galleryData = {
    ecomx: ["images/4196.png", "images/4197.png", "images/4198.png", "images/4199.jpg"],
    MVox: ["images/", "images/4200.jpg", "images/4202.jpg"],
    godot: ["images/4206.jpg","images/4207.jpg"]
};

// Function to change images with a fade effect
function changeImage(projectId, imagePath) {
    const display = document.getElementById(`${projectId}-display`);
    if (!display) return;
    
    display.style.opacity = '0.4'; // Quick fade out
    setTimeout(() => {
        display.src = imagePath;
        display.style.opacity = '1'; // Fade back in
    }, 200);
}

// Start the automatic cycles
function startGalleryLoops() {
    Object.keys(galleryData).forEach(id => {
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % galleryData[id].length;
            const nextImg = galleryData[id][currentIndex];
            changeImage(id, nextImg);
        }, 5000); // Change every 5 seconds
    });
}

// Initialize when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    startGalleryLoops();
});

