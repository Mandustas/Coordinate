import "../components/MapPanel.scss"
import "leaflet/dist/leaflet.css";

import ClusteringUsersPanel from './ClusteringUsersPanel'
import { useMap } from 'react-leaflet';
export interface MapPanelProps {

}

function MapPanel({ }: MapPanelProps) {
    return (
        <div id="MapPanel" className="leaflet-top leaflet-right ">
            <ClusteringUsersPanel></ClusteringUsersPanel>
        </div>
    )
}

export default MapPanel


