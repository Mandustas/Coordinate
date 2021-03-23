import React from 'react'
import MembersCard from './MembersCard'
import OperationPageHeader from './OperationPageHeader'

function MembersPage() {
    return (
        <div className="row">
            <OperationPageHeader title="Участники поиска" isBurger={true} operationName="Поиск кота"></OperationPageHeader>
            <MembersCard></MembersCard>
        </div>
    )
}

export default MembersPage
