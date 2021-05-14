import React, { useEffect } from 'react'
import Map from './Map'
import OperationPageHeader from './OperationPageHeader'
import "../components/Map.css"
import "../components/MissionPage.scss"
import { CreateTypes } from './ReviewPage'
import MissionCard from './MissionCard'
import ModalMissionAdd from './ModalMissionAdd'
import TargetPanel from './TargetPanel'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

function MissionsPage() {
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { fetchOperations } = useActions()

    useEffect(() => {
        fetchOperations()
    }, [])

    console.log(activeOperation);

    let usersActive:any;

    return (
        <div className="row mission-page-container" id="MissionPage">
            {/* <TargetPanel></TargetPanel> */}
            <div className="col-md-4 col-12 missions-list">
                <OperationPageHeader title="Миссии поиска" isBurger={true} modelType={CreateTypes.ModalMissionAdd}></OperationPageHeader>

                {
                    activeOperation != null
                        ? usersActive = activeOperation.users.map(() => {
                           
                            
                        })
                        : null
                }
    {
        console.log(usersActive)
        
    }
            </div>
            <div className="col-md-8 col-12" id="MapContainer" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                <Map></Map>
            </div>
            <ModalMissionAdd></ModalMissionAdd>

        </div>
    )
}

export default MissionsPage
