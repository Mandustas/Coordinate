import { Dispatch } from "react"
import { PagesAction, PagesActionTypes } from "../../types/pages"

export const changePage = (page: number) => {

    return (dispatch: Dispatch<PagesAction>) => {
        dispatch({ type: PagesActionTypes.PAGE_CHANGE, payload: page })
    }
}
