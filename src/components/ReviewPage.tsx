import React from 'react'
import DetectedObjectsCard from './DetectedObjectsCard'
import ImagesPreview from './ImagesPreview'
import MapPreview from './MapPreview'
import MemberAddMultiselect from './MemberAddMultiselect'
import MembersCard from './MembersCard'
import MemberSelect from './MemberSelect'
import MissionCard from './MissionCard'
import Modal from './Modal'
import ObjectSelect from './ObjectSelect'
import OperationPageHeader from './OperationPageHeader'
import TargetCard from './TargetCard'

function ReviewPage() {
    enum ModalTypes {
        ModelTarget = "modal-target",
        ModelTargetCreate = "modal-target-create",
        ModelMemberAdd = "modal-member-add",
        ModelObjectAdd = "modal-object-add",
        ModelMissionAdd = "modal-mission-add",

    }
    return (
        <div className="row">
            <div className="col-md-4 col-12" id="OperationPageContainerTargets">
                <OperationPageHeader operationName="Поиск кота" title="Обзор" isBurger={true}></OperationPageHeader>
                <MapPreview></MapPreview>
                <OperationPageHeader modelType={ModalTypes.ModelMissionAdd} title="Поисковые миссии" isBurger={false} href="/operation/missions"></OperationPageHeader>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <MissionCard></MissionCard>
                <Modal modelType={ModalTypes.ModelMissionAdd}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Создать миссию</h5>
                        <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Участник поиска:</label>
                                <MemberSelect></MemberSelect>

                            </div>
                            <div className="form-group" style={{ height: "300px" }}>
                                <label>Объект поиска:</label>
                                <ObjectSelect></ObjectSelect>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-dark" data-dismiss="modal">Добавить</button>
                    </div>
                </Modal>
            </div>

            <div className="col-md-3 col-12" id="OperationPageContainerMissions">
                <OperationPageHeader title="Цели поиска " isBurger={false} href="/operation/targets" modelType={ModalTypes.ModelTargetCreate}></OperationPageHeader>
                <TargetCard></TargetCard>
                <Modal modelType={ModalTypes.ModelTargetCreate}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Добавить цель</h5>
                        <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label >Название</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Введите название цели поиска"></input>
                            </div>
                            <div className="form-group">
                                <label>Описание цели:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" style={{ height: "200px" }}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-dark" data-dismiss="modal">Добавить</button>
                    </div>
                </Modal>
                <Modal modelType={ModalTypes.ModelTarget}>
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
                <OperationPageHeader modelType={ModalTypes.ModelObjectAdd} title="Объекты " isBurger={false} href="/operation/objects"></OperationPageHeader>
                <DetectedObjectsCard></DetectedObjectsCard>
                <DetectedObjectsCard></DetectedObjectsCard>
                <Modal modelType={ModalTypes.ModelObjectAdd}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Добавить объект на карту</h5>
                        <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label >Название объекта:</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Введите название цели поиска"></input>
                            </div>
                            <div className="form-group">
                                <label>Описание объекта:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" style={{ height: "200px" }}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Координаты:</label>
                                <div className="d-flex">
                                    <div className="col d-flex align-items-center">
                                        <label htmlFor="" style={{margin:"10px"}}>N: </label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="53.183721"></input>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <label htmlFor="" style={{margin:"10px"}}>W: </label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" 34.198288"></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-dark" data-dismiss="modal">Добавить</button>
                    </div>
                </Modal>

            </div>

            <div className="col-md-5 col-12" id="OperationPageContainerMembers">
                <OperationPageHeader modelType={ModalTypes.ModelMemberAdd} title="Участники поиска" isBurger={false} href="/operation/members"></OperationPageHeader>
                <MembersCard></MembersCard>
                <Modal modelType={ModalTypes.ModelMemberAdd}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Добавить участников</h5>
                        <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                        </button>
                    </div>
                    <div className="modal-body" style={{ height: "400px" }}>
                        <form>
                            <div className="form-group">
                                <label>Доступные для поиска</label>
                                <MemberAddMultiselect></MemberAddMultiselect>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-dark" data-dismiss="modal">Добавить</button>
                    </div>
                </Modal>
                <OperationPageHeader title="Изображения" isBurger={false} href="/operation/images"></OperationPageHeader>
                <ImagesPreview></ImagesPreview>
            </div>
        </div>
    )
}

export default ReviewPage
