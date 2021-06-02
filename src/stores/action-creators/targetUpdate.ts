import axios from "axios"
import { Dispatch } from "react"
import config from '../../config/config.json'
import { TargetUpdateAction, TargetUpdateActionTypes } from "../../types/targetUpdate"

export const fetchTargetUpdate = (id: number) => {
    return async (dispatch: Dispatch<TargetUpdateAction>) => {
        try {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            };
            const responseTargerUpdate = await axios.get(config.API_SERVER_URL + "target/" + id, axiosConfig)
            dispatch({ type: TargetUpdateActionTypes.FETCH_TARGET_UPDATE, payload: responseTargerUpdate.data })
        } catch (error) {
            console.log(error)
        }
    }
}