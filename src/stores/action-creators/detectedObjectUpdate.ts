import config from '../../config/config.json'
import axios from "axios"
import { Dispatch } from "react"
import { DetectedObjectAction, DetectedObjectActionTypes } from "../../types/detectedObjectUpdate"

export const fetchObjectUpdate = (id: number) => {
    return async (dispatch: Dispatch<DetectedObjectAction>) => {
        try {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            };
            const response = await axios.get(config.API_SERVER_URL + "DetectedObject/" + id, axiosConfig)
            dispatch({ type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_UPDATE, payload: response.data })
        } catch (error) {
            console.log(error)
        }
    }
}