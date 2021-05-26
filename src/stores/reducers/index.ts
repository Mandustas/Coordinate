import { combineReducers } from "redux";
import { activeOperationReducer } from "./activeOperationReducer";
import { operationReducer } from "./operationReducer";
import { detectedObjectReducer } from "./detectedObjectReducer";
import { cyclesReducer } from "./cyclesReducer";
import { pagesReducer } from "./pagesReducer";
import { targetUpdateReducer } from "./targetUpdate";
import { objectCreateReducer } from "./objectCreate";
import { objectUpdateReducer } from "./detectedObjectUpdate";

export const rootReducer = combineReducers(
    {
        operation: operationReducer,
        activeOperation: activeOperationReducer,
        detectedObjects: detectedObjectReducer,
        cycles: cyclesReducer,
        pages: pagesReducer,
        targetUpdate: targetUpdateReducer,
        objectCreate: objectCreateReducer,
        objectUpdate: objectUpdateReducer,
    }
)

export type RootState = ReturnType<typeof rootReducer>;