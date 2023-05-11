
import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ location }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const apiKey = 'AIzaSyBqJZLMZatrjtAmLdQWUKew2eg5pSyptsc';

        function initMap() {
            const geocoder = new window.google.maps.Geocoder();
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 0, lng: 0 },
                zoom: 2
            });

            geocoder.geocode({ address: location }, (results, status) => {
                if (status === window.google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    map.setZoom(6);

                    const marker = new window.google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });

                    const infoWindow = new window.google.maps.InfoWindow({
                        content: location
                    });

                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });
                } else {
                    alert('Geokodowanie nie powiodło się: ' + status);
                }
            });
        }

        if (window.google && window.google.maps) {
            // Jeśli Google Maps API jest już załadowane
            initMap();
        } else {
            // Jeśli Google Maps API nie jest załadowane, ładowanie skryptu
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);

            return () => {
                // Czyszczenie skryptu po odmontowaniu komponentu
                document.body.removeChild(script);
            };
        }
    }, [location]);

    return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default GoogleMap;
