import axios from "axios"
import { Dispatch } from "react"
import { TargetUpdateAction, TargetUpdateActionTypes } from "../../types/targetUpdate"

export const fetchTargetUpdate = (id:number) => {
    return async (dispatch: Dispatch<TargetUpdateAction>) => {
        try {
            const responseTargerUpdate = await axios.get("https://localhost:44330/api/target/" + id)
            dispatch({type: TargetUpdateActionTypes.FETCH_TARGET_UPDATE, payload: responseTargerUpdate.data})
        } catch (error) {
            console.log(error)
        }
    }
}