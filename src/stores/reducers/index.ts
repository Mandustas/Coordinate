import { combineReducers } from "redux";
import { activeOperationReducer } from "./activeOperationReducer";
import { operationReducer } from "./operationReducer";
import { detectedObjectReducer } from "./detectedObjectReducer";
import { cyclesReducer } from "./cyclesReducer";
import { pagesReducer } from "./pagesReducer";

export const rootReducer = combineReducers(
    {
        operation: operationReducer,
        activeOperation: activeOperationReducer,
        detectedObjects: detectedObjectReducer,
        cycles: cyclesReducer,
        pages: pagesReducer,
    }
)

export type RootState = ReturnType<typeof rootReducer>;