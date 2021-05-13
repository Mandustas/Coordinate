import axios from "axios"
import { Dispatch } from "react"
import { ActiveOperationAction, ActiveOperationActionTypes } from "../../types/activeOperation"

export const fetchActiveOperations = () => {
    return async (dispatch: Dispatch<ActiveOperationAction>) => {
        try {
            dispatch({type: ActiveOperationActionTypes.FETCH_ACTIVEOPERATION})
            const responseOperations = await axios.get("https://localhost:44330/api/operation/active")
            dispatch({type: ActiveOperationActionTypes.FETCH_ACTIVEOPERATION_SUCCESS, payloadOperation: responseOperations.data})
        } catch (error) {
            dispatch({
                type: ActiveOperationActionTypes.FETCH_ACTIVEOPERATION_ERROR, 
                payload: "Произошла ошибка при загрузке операций"
            })
        }
    }
}