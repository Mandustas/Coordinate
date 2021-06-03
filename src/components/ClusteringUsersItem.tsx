import React from 'react'
import MapPanel from './MapPanel'

export interface ClusteringUsersItemProps {
    key: number,
    id: number,
    index: number,
    firstName: string,
    secondName: string

}

function ClusteringUsersItem({ id, key, index, firstName, secondName }: ClusteringUsersItemProps) {
    return (
        <div className="clusteringUserItem">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <div className="clusteringUserItem-index">
                        {index}: 
                    </div>
                    <div className="clusteringUserItem-name">
                        {firstName + " " + secondName}
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="clusteringUserItem-edit">
                        <i className="fa fa-pencil clusteringUserItem-button" style={{ fontSize: "16px" }} onClick={() => { }}></i>
                    </div>
                    <div className="clusteringUserItem-delete">
                        <i className="fa fa-trash-o clusteringUserItem-button" style={{ fontSize: "16px" }} onClick={() => { }}></i>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ClusteringUsersItem
