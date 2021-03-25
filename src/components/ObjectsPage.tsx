import { useEffect } from 'react'
import Map from './Map'
import OperationPageHeader from './OperationPageHeader'
import "../components/Map.css"
import DetectedObjectsCard from './DetectedObjectsCard'
import $ from "jquery"
import { CreateTypes } from './ReviewPage'
import ModalObjectAdd from './ModalObjectAdd'

function MissionsPage() {
    useEffect(() => {
        function handleResize() {
            const headerHeight = $("#AppHeader").outerHeight() as any;
            const height = $(window).height() as any;
            $('.mission-page-container .missions-page-map-container').css("height", height - headerHeight);
            console.log("resize");

        }

        window.addEventListener("resize", handleResize);
        // window.addEventListener("load", handleResize)

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize)
            // setTimeout(() => window.removeEventListener("load", handleResize), 3000);

        };
    }, []);

    return (
        <div className="row mission-page-container">

            <div className="col-md-4 col-12 objects-page-map">
                <OperationPageHeader title="Найденные объекты" isBurger={true} operationName="" modelType={CreateTypes.ModalObjectAdd}></OperationPageHeader>
                <DetectedObjectsCard></DetectedObjectsCard>
                <DetectedObjectsCard></DetectedObjectsCard>
                <DetectedObjectsCard></DetectedObjectsCard>
                <DetectedObjectsCard></DetectedObjectsCard>
                <ModalObjectAdd></ModalObjectAdd>
            </div>
            <div className="col-md-8 col-12 objects-page-map-container" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                <Map></Map>
            </div>

        </div>
    )
}

export default MissionsPage
