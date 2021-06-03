import axios from 'axios'
import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { User } from '../types/clusteringUsers'
import ClusteringUsersItem from './ClusteringUsersItem'
import config from '../config/config.json'
import { useActions } from '../hooks/useActions'

function ClusteringUsersPanel() {
    const { users } = useTypedSelector(state => state.clusteringUsers)
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { fetchDetectedObjects, fetchActiveOperations, clearUsers } = useActions()


    useEffect(() => {

    })

    async function handleClustering() {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        let usersValid = new Array()

        users.forEach(element => {
            usersValid.push({ id: element.id })
        });
        console.log(usersValid);

        const res = await axios.post(config.API_SERVER_URL + 'DetectedObject/clustering/', usersValid, axiosConfig);

        clearUsers()
        fetchActiveOperations()
        fetchDetectedObjects(activeOperation != null ? activeOperation.id : 0)
    }

    let itemIndex = 0;
    return (
        <>
            {
                users.length != 0
                    ?
                    <div id="ClusteringUserPanel" className="leaflet-control leaflet-bar">
                        <div className="clusteringUserPanel-title">
                            Выбранные участники:
                        </div>
                        {
                            users.map((user: User) => {
                                return (
                                    <ClusteringUsersItem key={user.id} firstName={user.firstName} secondName={user.secondName} id={user.id} index={++itemIndex} ></ClusteringUsersItem>
                                )
                            })
                        }
                        <button className="btn btn-outline-secondary  clustering-user-panel-submit" onClick={() => handleClustering()}>Распределить объекты</button>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default ClusteringUsersPanel
