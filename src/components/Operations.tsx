import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchOperations } from '../stores/action-creators/operation';
import ModalOperationCreate from './ModalOperationCreate';
import ModalOperationFilter from './ModalOperationFilter';
import OperationCard from './OperationCard'
import OperationPageHeader from './OperationPageHeader';
import { CreateTypes, FilterTypes } from './ReviewPage';

function Operations() {
    const { error, loading, operations } = useTypedSelector(state => state.operation)
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    
    console.log(activeOperation);
    
    const { fetchOperations } = useActions()
    useEffect(() => {
        fetchOperations()
    }, [])


    return (
        <div className="row">
            <div className="col-md-4 col-12">
                <OperationPageHeader title="Активная операция" isBurger={false} modelType={CreateTypes.ModalOperationAdd} disabled={activeOperation != null ? true : false}></OperationPageHeader>
                <div className="row">
                    {
                        operations.map(operation => {
                            if (!operation.isSuccess) {
                                const targets = operation.targets.length;
                                const users = operation.users.length;
                                const dateCreated = new Date(operation.date).toLocaleDateString()
                                return (<OperationCard isActive={true} id={operation.id} key={operation.id} title={operation.title} coordinator={operation.coordinator.firstName + " " + operation.coordinator.secondName} members={users} targets={targets} date={dateCreated}></OperationCard>)
                            } else {
                                return null;
                            }

                        })
                    }
                </div>
            </div>
            <div className="col-md-8 col-12">
                <OperationPageHeader title="История операций" isBurger={false} filter={true} filterType={FilterTypes.ModalOperationsHistoryFilter}></OperationPageHeader>
                <div className="row">
                    {
                        operations.map(operation => {
                            if (operation.isSuccess) {
                                const targets = operation.targets.length;
                                const users = operation.users.length;
                                const dateCreated = new Date(operation.date).toLocaleDateString()
                                return (<OperationCard isActive={false} id={operation.id} key={operation.id} title={operation.title} coordinator={operation.coordinator.firstName + " " + operation.coordinator.secondName} members={users} targets={targets} date={dateCreated}></OperationCard>)
                            } else {
                                return null;
                            }
                        })
                    }
                </div>
            </div>
            <ModalOperationCreate></ModalOperationCreate>
            <ModalOperationFilter></ModalOperationFilter>
        </div>
    )
}

export default Operations;