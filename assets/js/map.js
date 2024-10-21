/**
 * @file map.js
 * 
 * @description
 * This script initializes a Leaflet.js map with a global view, adds OpenStreetMap tile layers, and loads marker data 
 * from an external CSV file. Each marker represents a different partner or user (e.g., universities, companies, labs, 
 * headquarters), displayed with custom icons and colors based on the CSV data. 
 * 
 * It uses PapaParse to fetch and parse the CSV, and dynamically generates map markers with custom popups for each entry.
 * 
 * The main functionalities include:
 * - Map initialization with world bounds and a centered view.
 * - Addition of OpenStreetMap tile layer for geographic representation.
 * - Function to generate custom map markers based on the type of location (university, company, etc.).
 * - Asynchronous loading and parsing of CSV data, with markers added dynamically.
 * - Custom popup content for each marker, displaying detailed information about the partner/user.
 * 
 * External Dependencies:
 * - Leaflet.js (https://leafletjs.com/)
 * - PapaParse (https://www.papaparse.com/) for CSV parsing.
 * 
 * CSV Format:
 * - The CSV file should have the following columns:
 *   - `latitude`: Latitude of the location.
 *   - `longitude`: Longitude of the location.
 *   - `marker-symbol`: The type of marker to display (e.g., university, company, lab).
 *   - `marker-color`: Hex color code for the marker icon.
 *   - `name`: Name of the partner or user.
 *   - `info`: Additional information to display in the marker's popup.
 * 
 * Usage:
 * - Ensure this script is linked in the HTML file (e.g., index.html).
 * - Provide the CSV file in the expected format and location (default: /assets/data/mapdata.csv).
 * - Customize marker icons and colors by editing the `getCustomIcon` function.
 * 
 * Example:
 * L.marker([37.7749, -122.4194], { icon: getCustomIcon('company', '#ff0000') })
 *   .bindPopup("<b>Sample Company</b><br>Details about the company")
 *   .addTo(map);
 * 
 * Author: Jinning Wang
 * Date: October 2024
 */

// Initialize the map with a global view
var map = L.map('map', {
    center: [20, 0],
    zoom: 2,
    worldCopyJump: true,
    maxBounds: [
        [-90, -180],
        [90, 180]
    ]
});

// Add a tile layer to the map (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to get custom icons
function getCustomIcon(markerSymbol, markerColor) {
    let iconClass;
    switch (markerSymbol) {
        case 'university':
            iconClass = 'fas fa-university';
            break;
        case 'company':
            iconClass = 'fas fa-building';
            break;
        case 'lab':
            iconClass = 'fas fa-flask';
            break;
        case 'headquarters':
            iconClass = 'fas fa-star';
            break;
        default:
            iconClass = 'fas fa-map-marker-alt';
    }

    return L.divIcon({
        html: `<i class="${iconClass}" style="color: ${markerColor || '#7992B1'}; font-size: 16px;"></i>`,
        className: 'custom-div-icon',
        iconSize: [16, 16],
        iconAnchor: [8, 16],
        popupAnchor: [0, -16]
    });
}

// Load CSV data using PapaParse
Papa.parse('/assets/data/mapdata.csv', {
    download: true,
    header: true,
    complete: function(results) {
        let data = results.data;

        data.forEach(entry => {
            let latlng = [parseFloat(entry.latitude), parseFloat(entry.longitude)];
            let markerSymbol = entry['marker-symbol'];
            let markerColor = entry['marker-color'];
            let popupContent = `<b>${entry.name}</b><br>${entry.info}`;

            let icon = getCustomIcon(markerSymbol, markerColor);
            L.marker(latlng, { icon: icon }).bindPopup(popupContent).addTo(map);
        });
    },
    error: function(error) {
        console.error('Error loading CSV data:', error);
    }
});
