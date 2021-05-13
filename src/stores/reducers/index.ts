import { combineReducers } from "redux";
import { activeOperationReducer } from "./activeOperationReducer";
import { operationReducer } from "./operationReducer";

export const rootReducer = combineReducers(
    {
        operation: operationReducer,
        activeOperation: activeOperationReducer,
    }
)

export type RootState = ReturnType<typeof rootReducer>;