import React from 'react'
import ModalOperationCreate from './ModalOperationCreate';
import ModalOperationFilter from './ModalOperationFilter';
import OperationCard from './OperationCard'
import OperationPageHeader from './OperationPageHeader';
import { CreateTypes, FilterTypes } from './ReviewPage';

function Operations() {

    return (
        <div className="row">
            <div className="col-md-4 col-12">
                <OperationPageHeader title="Активная операция" isBurger={false} modelType={CreateTypes.ModalOperationAdd}></OperationPageHeader>
                <div className="row">
                    <OperationCard isActive={true}></OperationCard>

                </div>
            </div>
            <div className="col-md-8 col-12">
                <OperationPageHeader title="История операций" isBurger={false} filter={true} filterType={FilterTypes.ModalOperationsHistoryFilter}></OperationPageHeader>
                <div className="row">
                    <OperationCard></OperationCard>
                    <OperationCard></OperationCard>
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

            </div>

            <ModalOperationCreate></ModalOperationCreate>
            <ModalOperationFilter></ModalOperationFilter>
        </div>
    )
}

export default Operations;