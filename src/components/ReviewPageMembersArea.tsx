import { useTypedSelector } from '../hooks/useTypedSelector'
import MembersTable from './MembersTable'
import ModalMemberAdd from './ModalMemberAdd'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'

function ReviewPageMembersArea() {
    const { activeOperation } = useTypedSelector(state => state.activeOperation)

    return (
        <>
            <OperationPageHeader modelType={CreateTypes.ModalMemberAdd} title="Участники поиска" isBurger={false} call={true}></OperationPageHeader>
            {
                activeOperation != null
                ? <MembersTable users={activeOperation.users}></MembersTable>
                : null
            }
            
            <ModalMemberAdd></ModalMemberAdd>
        </>
    )
}

export default ReviewPageMembersArea
