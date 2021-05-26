import axios from 'axios'
import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import ModalTargetAdd from './ModalTargetAdd'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'
import TargetCard from './TargetCard'


function ReviewPageTargerArea() {
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { fetchOperations } = useActions()
    const { fetchTargetUpdate } = useActions()
    
    useEffect(() => {
        fetchOperations()
    }, [])


    let UpdateTargetHandler = async (targetId: number) => {
        fetchTargetUpdate(targetId)
        $("#" + CreateTypes.ModalTargetUpdate).modal('show')
    }

    return (
        <>
            <OperationPageHeader operationName={activeOperation != null ? activeOperation.title : "Операция"} title="Цели поиска " isBurger={true} modelType={CreateTypes.ModalTargetCreate}></OperationPageHeader>
            {
                activeOperation != null
                    ? activeOperation.targets.map((target: any) => {
                        const lostDate = new Date(target.lostTime).toLocaleDateString()

                        return (<TargetCard key={target.id} id={target.id} date={lostDate} title={target.title} description={target.description} status={target.targetStatusId} onClick={() => UpdateTargetHandler(target.id)}></TargetCard>)
                    })
                    : null
            }

            <ModalTargetAdd></ModalTargetAdd>
        </>
    )
}

export default ReviewPageTargerArea
