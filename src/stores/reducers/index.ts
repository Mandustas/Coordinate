import { combineReducers } from "redux";
import { operationReducer } from "./operationReducer";

export const rootReducer = combineReducers(
    {
        operation: operationReducer,
    }
)

export type RootState = ReturnType<typeof rootReducer>;