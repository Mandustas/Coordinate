import ReviewPageMembersArea from './ReviewPageMembersArea'
import ReviewPageTargerArea from './ReviewPageTargerArea'

export enum CreateTypes {
    ModalTarget = "modal-target",
    ModalTargetCreate = "modal-target-create",
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
    return (
        <div className="row">
            <div className="col-md-4 col-12" id="OperationPageContainerTargets">
                {/* <ReviewPageMapArea></ReviewPageMapArea> */}
                <ReviewPageTargerArea></ReviewPageTargerArea>
            </div>

            {/* <div className="col-md-4 col-12" id="OperationPageContainerMissions">
                
            </div> */}

            <div className="col-md-8 col-12" id="OperationPageContainerMembers">
                <ReviewPageMembersArea></ReviewPageMembersArea>
            </div>
        </div>
    )
}

export default ReviewPage
