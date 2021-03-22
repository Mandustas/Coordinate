import React from 'react'
import MemberCard from './MemberCard'
import MissionCard from './MissionCard'
import OperationPageHeader from './OperationPageHeader'
import TargetCard from './TargetCard'

function OperationPageContainer() {
    return (
        <div className="row">
            <div className="col-md-4 col-12" id="OperationPageContainerTargets">
                <OperationPageHeader operationName="Поиск кота" title="Цели поиска" isBurger={true}></OperationPageHeader>
                <TargetCard></TargetCard>
                <TargetCard></TargetCard>
            </div>
            <div className="col-md-4 col-12" id="OperationPageContainerMembers">
                <OperationPageHeader title="Участники поиска" isBurger={false}></OperationPageHeader>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
            </div>
            <div className="col-md-4 col-12" id="OperationPageContainerMissions">
                <OperationPageHeader title="Поисковые миссии" isBurger={false}></OperationPageHeader>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
            </div>
        </div>
    )
}

export default OperationPageContainer
