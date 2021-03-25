import React from 'react'
import OperationCard from './OperationCard'
import OperationPageHeader from './OperationPageHeader';

export const Operations: React.FC = () => {
 
    return (
        <div className="row">
            <OperationPageHeader title="Операции" isBurger={false} pageAddHref="/operation/create"></OperationPageHeader>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
        </div>

    )
}

export default Operations;