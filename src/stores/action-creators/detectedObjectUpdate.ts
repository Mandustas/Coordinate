import axios from "axios"
import { Dispatch } from "react"
import { DetectedObjectAction, DetectedObjectActionTypes } from "../../types/detectedObjectUpdate"

export const fetchObjectUpdate = (id: number) => {
    return async (dispatch: Dispatch<DetectedObjectAction>) => {
        try {
            const response = await axios.get("https://localhost:44330/api/DetectedObject/" + id)
            dispatch({ type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_UPDATE, payload: response.data })
        } catch (error) {
            console.log(error)
        }
    }
}