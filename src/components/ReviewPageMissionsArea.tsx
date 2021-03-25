import React from 'react'
import MissionCard from './MissionCard'
import OperationPageHeader from './OperationPageHeader'
import ModalMissionAdd from './ModalMissionAdd'
import { CreateTypes } from './ReviewPage'

function ReviewPageMissionsArea() {
    return (
        <>
            <OperationPageHeader modelType={CreateTypes.ModalMissionAdd} title="Поисковые миссии" isBurger={false} href="/operation/missions"></OperationPageHeader>
            <MissionCard></MissionCard>
            <MissionCard></MissionCard>
            <MissionCard></MissionCard>
            <ModalMissionAdd></ModalMissionAdd>
        </>
    )
}

export default ReviewPageMissionsArea
