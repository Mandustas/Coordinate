import axios from "axios"
import { Dispatch } from "react"
import { OperationAction, OperationActionTypes } from "../../types/operation"

export const fetchOperations = () => {
    return async (dispatch: Dispatch<OperationAction>) => {
        try {
            dispatch({type: OperationActionTypes.FETCH_OPERATIONS})
            const responseOperations = await axios.get("https://localhost:44330/api/operation")
            dispatch({type: OperationActionTypes.FETCH_OPERATIONS_SUCCESS, payloadOperations: responseOperations.data})
        } catch (error) {
            dispatch({
                type: OperationActionTypes.FETCH_OPERATIONS_ERROR, 
                payload: "Произошла ошибка при загрузке операций"
            })
        }
    }
}