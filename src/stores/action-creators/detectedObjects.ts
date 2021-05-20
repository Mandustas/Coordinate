import axios from "axios"
import { Dispatch } from "react"
import { DetectedObjectAction, DetectedObjectActionTypes } from "../../types/detectedObject"

export const fetchDetectedObjects = () => {
    return async (dispatch: Dispatch<DetectedObjectAction>) => {
        try {
            dispatch({type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT})
            const responseDetectedObject = await axios.get("https://localhost:44330/api/DetectedObject")
            dispatch({type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_SUCCESS, payloadDetectedObjects: responseDetectedObject.data})
        } catch (error) {
            dispatch({
                type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_ERROR, 
                payload: "Произошла ошибка при загрузке объектов"
            })
        }
    }
}