import { SidebarPages } from "../../components/OperationPageSidebar";
import { PagesAction, PagesActionTypes, PagesState } from "../../types/pages";

const initialState: PagesState = {
    page: 1
}

export const pagesReducer = (state: PagesState = initialState, action: PagesAction): PagesState => {
    switch (action.type) {
        case PagesActionTypes.PAGE_CHANGE:
            return {...state, page: action.payload}

        default:
            return state;
    }
}