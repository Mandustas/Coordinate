import React from 'react'
import ModalOperationCreate from './ModalOperationCreate';
import OperationCard from './OperationCard'
import OperationPageHeader from './OperationPageHeader';
import { CreateTypes } from './ReviewPage';

function Operations() {

    return (
        <div className="row">
            <OperationPageHeader title="Операции" isBurger={false} modelType={CreateTypes.ModalOperationAdd}></OperationPageHeader>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <OperationCard></OperationCard>
            <ModalOperationCreate></ModalOperationCreate>
        </div>
    )
}

export default Operations;