import React from 'react'
import OperationCard from './OperationCard'
import OperationsHeader from './OperationsHeader';

export const Operations: React.FC = () => {
    

    return (
        <div className="row">
            <OperationsHeader></OperationsHeader>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
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