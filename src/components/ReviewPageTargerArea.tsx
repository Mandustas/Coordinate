import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import ModalTargetAdd from './ModalTargetAdd'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'
import TargetCard from './TargetCard'

function ReviewPageTargerArea() {
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { fetchOperations } = useActions()
    useEffect(() => {
        fetchOperations()
    }, [])
    return (
        <>
            <OperationPageHeader operationName={activeOperation!=null ? activeOperation.title : "Операция"} title="Цели поиска " isBurger={true} modelType={CreateTypes.ModalTargetCreate}></OperationPageHeader>

            {
                activeOperation != null
                    ? activeOperation.targets.map((target: any) => {
                        const lostDate = new Date(target.lostTime).toLocaleDateString()

                        return (<TargetCard key={target.id} id={target.id} date={lostDate} title={target.title} description={target.description} status={target.targetStatusId}></TargetCard>)
                    })
                    : null
            }

            <ModalTargetAdd></ModalTargetAdd>
        </>
    )
}

export default ReviewPageTargerArea
