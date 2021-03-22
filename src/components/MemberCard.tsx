import React from 'react'
import "../components/MemberCard.css"

function MemberCard() {
  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start member-card">
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1">Подоляко А. А.</p>
        <small className="text-muted">3 days ago</small>
      </div>
    </div>
  )
}

export default MemberCard
