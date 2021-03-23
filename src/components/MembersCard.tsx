import React from 'react'
import "../components/MembersCard.css"
import MemberLine from './MemberLine'

function MembersCard() {
  return (
    <div className="flex-column align-items-start members-card">
      <div className="d-flex w-100 container-fluid">
        {/* <div className="row">
          <div className="d-flex justify-content-between col-12 col-md-6">
            <p className="">Андрей Подоляко</p> 
            <i className="fa fa-times"></i>
          </div>
        </div> */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Миссии</th>
            </tr>
          </thead>
          <MemberLine></MemberLine>
          <MemberLine></MemberLine>
          <MemberLine></MemberLine>
        </table>
      </div>
    </div>
  )
}

export default MembersCard
