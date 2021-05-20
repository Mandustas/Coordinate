import { combineReducers } from "redux";
import { activeOperationReducer } from "./activeOperationReducer";
import { operationReducer } from "./operationReducer";
import { detectedObjectReducer } from "./detectedObjectReducer";

export const rootReducer = combineReducers(
    {
        operation: operationReducer,
        activeOperation: activeOperationReducer,
        detectedObjects: detectedObjectReducer,
    }
)

export type RootState = ReturnType<typeof rootReducer>;