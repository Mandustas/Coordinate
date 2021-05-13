import React from 'react'
import "../components/MembersCard.css"
import MemberLine from './MemberLine'


export interface MembersTableProps {
  users: any[]
}

function MembersTable({ users }: MembersTableProps) {
  let tableIndex = 0
  return (
    <div className="flex-column align-items-start members-card">
      <div className="d-flex w-100 container-fluid">

        <table className="table" style={{ border: "none" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
            </tr>
          </thead>

          {
            users != null
              ? users.map((user: any) => {
                return (<MemberLine key={user.id} id={user.id} firstName={user.firstName} secondName={user.secondName}  tableIndex={++tableIndex}></MemberLine>)
              })
              : null
          }

        </table>
      </div>
    </div>
  )
}

export default MembersTable
