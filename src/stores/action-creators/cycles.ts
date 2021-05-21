import axios from "axios"
import { Dispatch } from "react"
import { CycleAction, CyclesActionTypes } from "../../types/cycles"

export const fetchCycles = (OperationId:number) => {
    return async (dispatch: Dispatch<CycleAction>) => {
        try {
            dispatch({type: CyclesActionTypes.FETCH_CYCLES})
            const responseCycles = await axios.get("https://localhost:44330/api/Image", 
                {
                    params:{
                        'OperationId': OperationId,
                    }
                }
            ) 
            dispatch({type: CyclesActionTypes.FETCH_CYCLES_SUCCESS, payloadCycles: responseCycles.data})
        } catch (error) {
            dispatch({
                type: CyclesActionTypes.FETCH_CYCLES_ERROR, 
                payload: "Произошла ошибка при загрузке изображений"
            })
        }
    }
}