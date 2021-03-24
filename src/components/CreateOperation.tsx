import React from 'react'
import MembersCard from './MembersCard'
import OperationPageHeader from './OperationPageHeader'
import TargetCard from './TargetCard'

function CreateOperation() {
    return (
        <div className="row">
            <div className="col-4">
                <OperationPageHeader title="Создание операции" isBurger={false}></OperationPageHeader>
                <form>
                    <div className="form-group">
                        <label>Название операции:</label>
                        <div className="d-flex">
                            <input type="text" className="form-control border border-dark" id="exampleFormControlInput1" placeholder="Введите название операции">
                            </input>
                            {/* <input type="submit" className="btn btn-outline-dark" style={{marginLeft:"10px"}}></input>
                            <input type="submit" className="btn btn-outline-dark" style={{marginLeft:"10px"}}></input> */}
                            <button className="btn btn-outline-dark" type="submit" style={{marginLeft:"10px"}}><i className="fa fa-check" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </form>
                <OperationPageHeader title="Цели поиска" isBurger={false}></OperationPageHeader>
                
                <TargetCard></TargetCard>
                <TargetCard></TargetCard>
            </div>
            <div className="col-8">
                <OperationPageHeader title="Участники" isBurger={false}></OperationPageHeader>
                <MembersCard></MembersCard>
            </div>
        </div>
    )
}

export default CreateOperation
