import React, { useEffect } from 'react'
import Map from './Map'
import OperationPageHeader from './OperationPageHeader'
import "../components/Map.css"
import "../components/MissionPage.scss"
import { CreateTypes } from './ReviewPage'
import MissionCard from './MissionCard'
import ModalMissionAdd from './ModalMissionAdd'
import TargetPanel from './TargetPanel'

function MissionsPage() {
    useEffect(() => {
        function handleResize() {
            // const headerHeight = $("#AppHeader").outerHeight() as any;
            // const height = $(window).height() as any;
            // $('.mission-page-container .missions-page-map-container').css("height", height - headerHeight);

        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize)
        };


    }, []);

    return (
        <div className="row mission-page-container" id="MissionPage">
            {/* <TargetPanel></TargetPanel> */}
            <div className="col-md-4 col-12 missions-list">
                <OperationPageHeader title="Миссии поиска" isBurger={true} modelType={CreateTypes.ModalMissionAdd}></OperationPageHeader>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
            </div>
            <div className="col-md-8 col-12" id="MapContainer" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                <Map></Map>
            </div>
            <ModalMissionAdd></ModalMissionAdd>

        </div>
    )
}

export default MissionsPage
