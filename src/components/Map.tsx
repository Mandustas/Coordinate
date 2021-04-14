import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, TileLayer } from 'react-leaflet'
import "../components/Map.css"
import $ from 'jquery';
import "leaflet/dist/leaflet.css";


// export interface MapState{
//     height: string
// }

function Map() {
    const greenOptions = { color: 'green', fillColor: 'green' }

    const [height, setHeight] = useState(698); // TODO заменить на высчитваемое значение


    return (
        <MapContainer center={[53.23204557790858, 34.12212667059104]} zoom={13} scrollWheelZoom={false} style={{ height: "698px" }} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
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
            <Circle
                center={[53.22112659521979, 34.09483736164939]}
                pathOptions={greenOptions}
                radius={300}
            />
            <Circle
                center={[53.247794013429655, 34.10917817195677]}
                pathOptions={greenOptions}
                radius={300}
            />
            <Marker
                    icon={icon}
                    position={[51.5, -0.1]}>

                </Marker> */}
        </MapContainer>
    )
}

export default Map
