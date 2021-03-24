import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "../components/Map.css"
import $ from 'jquery'; 


// export interface MapState{
//     height: string
// }

function Map() {
    const [height, setHeight] = useState(698); // TODO заменить на высчитваемое значение


    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="missions-page-map" style={{height: height}} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
        </MapContainer>
    )
}

export default Map
