import { useEffect } from 'react'
import Map from './Map'
import OperationPageHeader from './OperationPageHeader'
import "../components/Map.css"
import $ from "jquery"
import { CreateTypes } from './ReviewPage'
import ModalObjectAdd from './ModalObjectAdd'
import MissionCard from './MissionCard'

function MissionsPage() {
    useEffect(() => {
        function handleResize() {
            const headerHeight = $("#AppHeader").outerHeight() as any;
            const height = $(window).height() as any;
            $('.mission-page-container .missions-page-map-container').css("height", height - headerHeight);

        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);

    return (
        <div className="row mission-page-container">
            <div className="col-md-4 col-12 objects-page-map">
                <OperationPageHeader title="Миссии поиска" isBurger={true} operationName="" modelType={CreateTypes.ModalObjectAdd}></OperationPageHeader>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <ModalObjectAdd></ModalObjectAdd>
            </div>
            <div className="col-md-8 col-12 objects-page-map-container" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                <Map></Map>
            </div>
        </div>
    )
}

export default MissionsPage
