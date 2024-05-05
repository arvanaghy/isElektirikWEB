import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import {Icon} from 'leaflet';

const Map = ({ lat, long }) => {

    const iconPerson = new L.Icon({
        iconUrl : '/storage/location.svg',
        iconSize : [35,35], // size of the icon
        // iconAnchor : [22,94], // point of the icon which will correspond to marker's location
        // popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
    
    });

    return (
        <MapContainer scrollWheelZoom={false} center={[lat, long]} zoom={7} style={{ height: "200px", width: "100%", zIndex: "1", borderRadius: "25px" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[ lat ,  long ]} icon={iconPerson}  >
                <Popup>
                    Is Elektrik
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map