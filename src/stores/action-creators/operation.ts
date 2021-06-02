import axios from "axios"
import config from '../../config/config.json'

import { Dispatch } from "react"
import { OperationAction, OperationActionTypes } from "../../types/operation"

export const fetchOperations = () => {
    return async (dispatch: Dispatch<OperationAction>) => {
        try {
            dispatch({ type: OperationActionTypes.FETCH_OPERATIONS })
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            };
            const responseOperations = await axios.get(config.API_SERVER_URL + "operation", axiosConfig)
            dispatch({ type: OperationActionTypes.FETCH_OPERATIONS_SUCCESS, payloadOperations: responseOperations.data })
        } catch (error) {
            dispatch({
                type: OperationActionTypes.FETCH_OPERATIONS_ERROR,
                payload: "Произошла ошибка при загрузке операций"
            })
        }
    }
}