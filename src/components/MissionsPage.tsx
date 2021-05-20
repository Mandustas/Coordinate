import { useEffect } from 'react'
import Map from './Map'
import OperationPageHeader from './OperationPageHeader'
import "../components/Map.css"
import "../components/MissionPage.scss"
import { CreateTypes } from './ReviewPage'
import MissionCard from './MissionCard'
import ModalMissionAdd from './ModalMissionAdd'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

function MissionsPage() {
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { fetchOperations } = useActions()

    useEffect(() => {
        fetchOperations()
    }, [])

    let missionsActive = new Array();


    if (activeOperation != null) {
        activeOperation.users.forEach((user: any) => {
            user.missions.forEach((mission: any) => {
                missionsActive.push(mission)
            });
        });
    }


    return (
        <div className="row mission-page-container" id="MissionPage">
            {/* <TargetPanel></TargetPanel> */}
            <div className="col-md-4 col-12 missions-list">
                <OperationPageHeader title="Миссии поиска" isBurger={true} modelType={CreateTypes.ModalMissionAdd}></OperationPageHeader>

                {
                    activeOperation != null
                        ? missionsActive.map((mission: any) => {
                            return (<MissionCard
                                id={mission.id}
                                key={mission.id}
                                detectedObjects={mission.detectedObjects}
                                memberName={mission.user.firstName + " " + mission.user.secondName}
                            ></MissionCard>)
                        })
                        : null
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
