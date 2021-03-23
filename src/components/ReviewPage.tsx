import React from 'react'
import ImagesPreview from './ImagesPreview'
import MapPreview from './MapPreview'
import MembersCard from './MembersCard'
import MissionCard from './MissionCard'
import Modal from './Modal'
import OperationPageHeader from './OperationPageHeader'
import TargetCard from './TargetCard'

function ReviewPage() {
    return (
        <div className="row">
            <div className="col-md-4 col-12" id="OperationPageContainerTargets">
                <OperationPageHeader operationName="Поиск кота" title="Цели поиска" isBurger={true} href="/operation/targets"></OperationPageHeader>
                <MapPreview></MapPreview>
                <TargetCard></TargetCard>
                <TargetCard></TargetCard>
                <Modal>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Цель поиска</h5>
                        <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat excepturi, magni harum quas aliquam vitae recusandae. Eaque id, magni dolor a animi, dolorum fugit quaerat in, minima harum eveniet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim? Architecto ad facilis, suscipit perspiciatis, nesciunt, necessitatibus rem similique eos veritatis adipisci voluptates quod neque! Ipsum quod aliquid eum quidem.
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </Modal>
            </div>
            
            <div className="col-md-3 col-12" id="OperationPageContainerMissions">
                <OperationPageHeader title="Поисковые миссии" isBurger={false}></OperationPageHeader>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
            </div>

            <div className="col-md-5 col-12" id="OperationPageContainerMembers">
                <OperationPageHeader title="Участники поиска" isBurger={false} href="/operation/members"></OperationPageHeader>
                <MembersCard></MembersCard>
                <OperationPageHeader title="Изображения" isBurger={false} href="/operation/images"></OperationPageHeader>
                <ImagesPreview></ImagesPreview>
            </div>
        </div>
    )
}

export default ReviewPage
