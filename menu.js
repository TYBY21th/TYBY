document.addEventListener('DOMContentLoaded', () => {
    const dotsIcon = document.getElementById('dots-icon');
    const menu = document.getElementById('menu');
    const pageContainer = document.querySelector('.page-container');

    dotsIcon.addEventListener('click', () => {
        menu.classList.toggle('open');
        dotsIcon.classList.toggle('open');
        pageContainer.classList.toggle('blur');
    });

    // Initialize map (using Leaflet for simplicity)
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }
});
