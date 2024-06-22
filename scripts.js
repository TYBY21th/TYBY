document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('map');

    // Initialize map (using Leaflet for simplicity)
    const map = L.map(mapElement).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Fetch and display shops
    fetch('api/shops.php')
        .then(response => response.json())
        .then(data => {
            data.shops.forEach(shop => {
                L.marker([shop.latitude, shop.longitude])
                    .addTo(map)
                    .bindPopup(`<b>${shop.name}</b><br>${shop.address}`);
            });
        })
        .catch(error => console.error('Error fetching shops:', error));

    // Get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            const userMarker = L.marker([lat, long], {
                icon: L.icon({
                    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                })
            }).addTo(map).bindPopup('You are here').openPopup();

            map.setView([lat, long], 13);
        }, error => {
            console.error('Error getting location:', error);
        }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        alert('Geolocation is not supported by your browser');
    }
});
