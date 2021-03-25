import ModalTarget from './ModalTarget'
import ModalTargetCreate from './ModalTargetCreate'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'
import TargetCard from './TargetCard'

function ReviewPageTargerArea() {
    return (
        <>
            <OperationPageHeader title="Цели поиска " isBurger={false} href="/operation/targets" modelType={CreateTypes.ModalTargetCreate}></OperationPageHeader>
            <TargetCard></TargetCard>
            <TargetCard></TargetCard>
            <ModalTargetCreate></ModalTargetCreate>
            <ModalTarget></ModalTarget>
        </>
    )
}

export default ReviewPageTargerArea
