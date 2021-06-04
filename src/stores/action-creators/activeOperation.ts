import axios from "axios"
import config from '../../config/config.json'
import { Dispatch } from "react"
import { ActiveOperationAction, ActiveOperationActionTypes } from "../../types/activeOperation"

export const fetchActiveOperations = () => {
    return async (dispatch: Dispatch<ActiveOperationAction>) => {
        try {
            dispatch({ type: ActiveOperationActionTypes.FETCH_ACTIVEOPERATION })
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            };
            const responseOperations = await axios.get(config.API_SERVER_URL + "operation/active", axiosConfig)
            setTimeout(() => {
                dispatch({ type: ActiveOperationActionTypes.FETCH_ACTIVEOPERATION_SUCCESS, payloadOperation: responseOperations.data })
            }, 500);
            
        } catch (error) {
            dispatch({
                type: ActiveOperationActionTypes.FETCH_ACTIVEOPERATION_ERROR,
                payload: "Произошла ошибка при загрузке операции"
            })
        }
    }
}