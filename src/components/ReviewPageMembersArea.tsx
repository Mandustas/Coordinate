import React from 'react'
import MemberAddMultiselect from './MemberAddMultiselect'
import MembersCard from './MembersCard'
import Modal from './Modal'
import ModalMemberAdd from './ModalMemberAdd'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'

function ReviewPageMembersArea() {
    return (
        <>
            <OperationPageHeader modelType={CreateTypes.ModalMemberAdd} title="Участники поиска" isBurger={false} href="/operation/members"></OperationPageHeader>
            <MembersCard></MembersCard>
            <ModalMemberAdd></ModalMemberAdd>
        </>
    )
}

export default ReviewPageMembersArea
