import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { SidebarPages } from './OperationPageSidebar'
import ReviewPageMembersArea from './ReviewPageMembersArea'
import ReviewPageTargerArea from './ReviewPageTargerArea'

export enum CreateTypes {
    ModalTarget = "modal-target",
    ModalTargetCreate = "modal-target-create",
    ModalTargetUpdate = "modal-target-update",
    ModalMemberAdd = "modal-member-add",
    ModalObjectAdd = "modal-object-add",
    ModalMissionAdd = "modal-mission-add",
    PageOperationAdd = "page-operation-add",
    ModalOperationAdd = "modal-operation-add",

}

export enum FilterTypes {
    ModalOperationsHistoryFilter = "modal-operation-history-filter",
}



function ReviewPage() {
    const { changePage } = useActions()
    useEffect(() => {
        changePage(SidebarPages.Review)
    }, [])
    return (
        <div className="row">
            <div className="col-md-4 col-12" id="OperationPageContainerTargets">
                <ReviewPageTargerArea></ReviewPageTargerArea>
            </div>
            <div className="col-md-8 col-12" id="OperationPageContainerMembers">
                <ReviewPageMembersArea></ReviewPageMembersArea>
            </div>
        </div>
    )
}

export default ReviewPage
