import React from 'react'
import MissionCard from './MissionCard'
import OperationPageHeader from './OperationPageHeader'

function MissionsPage() {
    return (
        <div className="row">
            <OperationPageHeader title="Цели поиска" isBurger={true} operationName="Поиск кота"></OperationPageHeader>
            <MissionCard></MissionCard>
            <MissionCard></MissionCard>
            <MissionCard></MissionCard>
            <MissionCard></MissionCard>
        </div>
    )
}

export default MissionsPage
