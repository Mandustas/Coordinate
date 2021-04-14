import ModalTarget from './ModalTarget'
import ModalTargetAdd from './ModalTargetAdd'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'
import TargetCard from './TargetCard'

function ReviewPageTargerArea() {
    return (
        <>
            <OperationPageHeader operationName="Поиск кота" title="Цели поиска " isBurger={true} href="/operation/targets" modelType={CreateTypes.ModalTargetCreate}></OperationPageHeader>
            <TargetCard></TargetCard>
            <TargetCard></TargetCard>
            <TargetCard></TargetCard>
            <ModalTargetAdd></ModalTargetAdd>
            <ModalTarget></ModalTarget>
        </>
    )
}

export default ReviewPageTargerArea
