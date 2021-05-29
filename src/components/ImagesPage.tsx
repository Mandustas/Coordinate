import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CycleItem from './CycleItem';
import OperationPageHeader from './OperationPageHeader'
import { SidebarPages } from './OperationPageSidebar';

function ImagesPage() {
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { cycles } = useTypedSelector(state => state.cycles)
    const { fetchCycles, changePage } = useActions()

    useEffect(() => {
        changePage(SidebarPages.Images)
    }, [])

    useEffect(() => {
        if (activeOperation != null) {
            fetchCycles(activeOperation.id)
        }
    }, [activeOperation]);

    return (
        <div className="row">
            <div className="col-12">
                <OperationPageHeader title="Изображения" isBurger={true}></OperationPageHeader>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        {cycles.map(cycle => {
                            return (<CycleItem key={cycle.id} title={cycle.title} id={cycle.id} endDate={cycle.endDate} startDate={cycle.startDate} images={cycle.images}></CycleItem>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagesPage
