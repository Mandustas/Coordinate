import { Dispatch } from "react"
import { AuthAction, AuthActionTypes } from "../../types/auth"

export const authChange = (auth: boolean) => {

    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({ type: AuthActionTypes.SET_AUTH, payload: auth })
    }
}
