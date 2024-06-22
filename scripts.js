document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const body = document.body;

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('open');
        menuIcon.classList.toggle('open');
        body.classList.toggle('blur');
    });

    // Initialize map (using Leaflet for simplicity)
    const mapElement = document.getElementById('map');
    const map = L.map(mapElement).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Fetch and display shops
    fetch('api/shops.php')
        .then(response => response.json())
        .
