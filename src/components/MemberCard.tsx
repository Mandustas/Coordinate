import React from 'react'
import "../components/MemberCard.css"

function MemberCard() {
  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start member-card">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Подоляко Андрей Алексеевич</h5>
        <small className="text-muted">3 days ago</small>
      </div>
    </div>
  )
}

export default MemberCard
