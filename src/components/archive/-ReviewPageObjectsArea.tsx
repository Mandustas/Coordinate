import DetectedObjectsCard from './-DetectedObjectsCard'
import ModalObjectAdd from '../ModalObjectAdd'
import OperationPageHeader from '../OperationPageHeader'
import { CreateTypes } from '../ReviewPage'

function ReviewPageObjectsArea() {
    return (
        <>
            <OperationPageHeader modelType={CreateTypes.ModalObjectAdd} title="Объекты " isBurger={false} href="/operation/objects"></OperationPageHeader>
            <DetectedObjectsCard></DetectedObjectsCard>
            <DetectedObjectsCard></DetectedObjectsCard>
            <ModalObjectAdd></ModalObjectAdd>
        </>
    )
}

export default ReviewPageObjectsArea
