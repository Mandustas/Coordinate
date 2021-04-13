import React, { useEffect } from 'react'
import ModalTargetAdd from './ModalTargetAdd'
import OperationPageHeader from './OperationPageHeader'
import { CreateTypes } from './ReviewPage'
import TargetCard from './TargetCard'

function TargetsPage() {
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
                <OperationPageHeader title="Цели поиска" isBurger={true} operationName="Поиск кота" modelType={CreateTypes.ModalTargetCreate}></OperationPageHeader>
            </div>
            <div className="col-md-8 col-12 members-table">
                <TargetCard></TargetCard>
                <TargetCard></TargetCard>
                <TargetCard></TargetCard>
            </div>
            <ModalTargetAdd></ModalTargetAdd>

        </div>
    )
}

export default TargetsPage
