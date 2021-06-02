import axios from "axios"
import config from '../../config/config.json'
import { Dispatch } from "react"
import { CycleAction, CyclesActionTypes } from "../../types/cycles"

export const fetchCycles = (OperationId: number) => {
    return async (dispatch: Dispatch<CycleAction>) => {
        try {
            dispatch({ type: CyclesActionTypes.FETCH_CYCLES })
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            };
            const responseCycles = await axios.get(config.API_SERVER_URL + "Image", axiosConfig)
            dispatch({ type: CyclesActionTypes.FETCH_CYCLES_SUCCESS, payloadCycles: responseCycles.data })
        } catch (error) {
            dispatch({
                type: CyclesActionTypes.FETCH_CYCLES_ERROR,
                payload: "Произошла ошибка при загрузке изображений"
            })
        }
    }
}