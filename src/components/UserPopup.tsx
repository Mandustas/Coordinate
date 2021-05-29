import React from 'react'

export interface UserPopupProps {
    key: number
    id: number
    name: string
}

function UserPopup({ id, key, name }: UserPopupProps) {
    return (
        <>
            <div className="user-popup-name">
                {name}
            </div>
        </>
    )
}

export default UserPopup
