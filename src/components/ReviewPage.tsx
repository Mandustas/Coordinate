import ReviewPageImagesArea from './ReviewPageImagesArea'
import ReviewPageMapArea from './ReviewPageMapArea'
import ReviewPageMembersArea from './ReviewPageMembersArea'
import ReviewPageMissionsArea from './ReviewPageMissionsArea'
import ReviewPageObjectsArea from './ReviewPageObjectsArea'
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

function ReviewPage() {
    return (
        <div className="row">
            <div className="col-md-5 col-12" id="OperationPageContainerTargets">
                {/* <ReviewPageMapArea></ReviewPageMapArea> */}
                <ReviewPageTargerArea></ReviewPageTargerArea>
            </div>

            {/* <div className="col-md-4 col-12" id="OperationPageContainerMissions">
                
            </div> */}

            <div className="col-md-7 col-12" id="OperationPageContainerMembers">
                <ReviewPageMembersArea></ReviewPageMembersArea>
            </div>
        </div>
    )
}

export default ReviewPage
