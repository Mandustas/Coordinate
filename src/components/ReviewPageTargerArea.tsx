import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import ModalTargetAdd from './ModalTargetAdd'
import ModalTargetUpdate from './ModalTargetUpdate'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'
import TargetCard from './TargetCard'


function ReviewPageTargerArea() {
    const [targetIdToChange, setTargetIdToChange] = useState(0)
    const [targetToChange, setTargetToChange] = useState(0)
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { fetchOperations } = useActions()
    
    useEffect(() => {
        fetchOperations()
    }, [])


    let UpdateTargetHandler = async (targetId: number) => {
        try {
            setTargetIdToChange(targetId)
            const responseTarget = await axios.get("https://localhost:44330/api/target/" + targetId)
            setTargetToChange(responseTarget.data);
           
        } catch (error) {
            console.log("DEBUG: ошибка при  загрузке цели для изменения")
        }
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
            <ModalTargetUpdate TargetId={targetIdToChange} TargetForChange={targetToChange}></ModalTargetUpdate>
        </>
    )
}

export default ReviewPageTargerArea
