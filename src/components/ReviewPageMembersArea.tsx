import MembersTable from './MembersTable'
import ModalMemberAdd from './ModalMemberAdd'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'

function ReviewPageMembersArea() {
    return (
        <>
            <OperationPageHeader modelType={CreateTypes.ModalMemberAdd} title="Участники поиска" isBurger={false} href="/operation/members" call={true}></OperationPageHeader>
            <MembersTable></MembersTable>
            <ModalMemberAdd></ModalMemberAdd>
        </>
    )
}

export default ReviewPageMembersArea
