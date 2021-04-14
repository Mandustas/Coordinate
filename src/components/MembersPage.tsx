import React, { useEffect } from 'react'
import MembersTable from './MembersTable'
import ModalMemberAdd from './ModalMemberAdd';
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'

function MembersPage() {
    useEffect(() => {
        function handleResize() {
            const headerHeight = $("#AppHeader").outerHeight() as any;
            const height = $(window).height() as any;
            $('.members-table').css("height", height - headerHeight);

        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize)

        };
    }, []);

    return (
        <div className="row">
            <div className="col-md-4 col-12 control-panel">
                <OperationPageHeader title="Участники поиска" isBurger={true} operationName="Поиск кота" call={true} modelType={CreateTypes.ModalMemberAdd}></OperationPageHeader>
            </div>
            <div className="col-md-8 col-12 members-table">
                <MembersTable></MembersTable>
            </div>
            <ModalMemberAdd></ModalMemberAdd>

        </div>
    )
}

export default MembersPage
