import { useTypedSelector } from '../hooks/useTypedSelector'
import ModalTarget from './ModalTarget'
import ModalTargetAdd from './ModalTargetAdd'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'
import TargetCard from './TargetCard'

function ReviewPageTargerArea() {
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    
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
            <ModalTarget></ModalTarget>
        </>
    )
}

export default ReviewPageTargerArea
