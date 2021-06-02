import axios from "axios"
import config from '../../config/config.json'
import { Dispatch } from "react"
import { DetectedObjectAction, DetectedObjectActionTypes } from "../../types/detectedObject"

export const fetchDetectedObjects = (OperationId: number) => {
    return async (dispatch: Dispatch<DetectedObjectAction>) => {
        try {
            dispatch({ type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT })
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            };
            const responseDetectedObject = await axios.get(config.API_SERVER_URL + "DetectedObject", axiosConfig)
            dispatch({ type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_SUCCESS, payloadDetectedObjects: responseDetectedObject.data })
        } catch (error) {
            dispatch({
                type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_ERROR,
                payload: "Произошла ошибка при загрузке объектов"
            })
        }
    }
}