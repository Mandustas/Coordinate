import React from 'react'
import MembersCard from './MembersCard'
import ModalMemberAdd from './ModalMemberAdd'
import ModalTarget from './ModalTarget'
import ModalTargetCreate from './ModalTargetCreate'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'
import TargetCard from './TargetCard'

function CreateOperation() {
    return (
        <div className="row">
            <div className="col-md-4 col-12">
                <OperationPageHeader title="Создание операции" isBurger={false} ></OperationPageHeader>
                <form>
                    <div className="form-group">
                        <label>Название операции:</label>
                        <div className="d-flex">
                            <input type="text" className="form-control border border-dark" id="exampleFormControlInput1" placeholder="Введите название операции">
                            </input>
                            {/* <input type="submit" className="btn btn-outline-dark" style={{marginLeft:"10px"}}></input>
                            <input type="submit" className="btn btn-outline-dark" style={{marginLeft:"10px"}}></input> */}
                            <button className="btn btn-outline-dark" type="submit" style={{ marginLeft: "10px" }}><i className="fa fa-check" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </form>
                <OperationPageHeader title="Цели поиска" isBurger={false} modelType={CreateTypes.ModalTargetCreate}></OperationPageHeader>

                <TargetCard></TargetCard>
                <TargetCard></TargetCard>

                <ModalTarget></ModalTarget>
                <ModalTargetCreate></ModalTargetCreate>

            </div>
            <div className="col-md-8 col-12">
                <OperationPageHeader title="Участники" isBurger={false} modelType={CreateTypes.ModalMemberAdd}></OperationPageHeader>
                <MembersCard></MembersCard>
                <ModalMemberAdd></ModalMemberAdd>
            </div>
        </div>
    )
}

export default CreateOperation
