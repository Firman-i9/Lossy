document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    // Optional functionality: log message when scrolling
    gallery.addEventListener('scroll', () => {
        console.log('Gallery is being scrolled');
    });
    
    // Example of adding more interactivity if needed
    gallery.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            alert(`You clicked on: ${event.target.alt}`);
        }
    });
});
