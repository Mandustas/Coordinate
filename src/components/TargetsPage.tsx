import React from 'react'
import OperationPageHeader from './OperationPageHeader'
import TargetCard from './TargetCard'

function TargetsPage() {
    return (
        <div className="row">
            <OperationPageHeader title="Цели поиска" isBurger={true} operationName="Поиск кота"></OperationPageHeader>
            <TargetCard></TargetCard>
            <TargetCard></TargetCard>
            <TargetCard></TargetCard>
            <TargetCard></TargetCard>
            <TargetCard></TargetCard>
        </div>
    )
}

export default TargetsPage
