import { Dispatch } from "react"
import { ObjectCreateAction, ObjectCreateActionTypes } from "../../types/objectCreate"

export const setObjectCreate = (x: string, y: string) => {
    return (dispatch: Dispatch<ObjectCreateAction>) => {
        dispatch({ type: ObjectCreateActionTypes.SET_OBJECT_CREATE, payload: { x, y } })
    }
}
