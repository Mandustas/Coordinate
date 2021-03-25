import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';



const icon = new L.Icon({
    iconUrl: require('../files/icon.png'),
    iconRetinaUrl: require('../files/icon.png'),
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

export { icon };

function MapPreview() {
    const greenOptions = { color: 'green', fillColor: 'green' }
    const whiteOptions = { color: 'gray', fillColor: 'gray' }



    return (
        <div className="col mb-3 border border-light" >
            <MapContainer center={[53.23204557790858, 34.12212667059104]} zoom={13} scrollWheelZoom={false} style={{ height: "300px" }} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                <Circle
                    center={[53.23204557790858, 34.12212667059104]}
                    pathOptions={greenOptions}
                    radius={300}
                />
                <Circle
                    center={[53.21670820060693, 34.1272782237835]}
                    pathOptions={greenOptions}
                    radius={300}
                />
                {/* <Marker
                    icon={icon}
                    position={[51.5, -0.1]}>

                </Marker> */}
            </MapContainer>
        </div>
    )
}

export default MapPreview
