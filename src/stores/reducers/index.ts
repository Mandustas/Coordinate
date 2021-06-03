import { combineReducers } from "redux";
import { activeOperationReducer } from "./activeOperationReducer";
import { operationReducer } from "./operationReducer";
import { detectedObjectReducer } from "./detectedObjectReducer";
import { cyclesReducer } from "./cyclesReducer";
import { pagesReducer } from "./pagesReducer";
import { authReducer } from "./authReducer";
import { targetUpdateReducer } from "./targetUpdate";
import { objectCreateReducer } from "./objectCreate";
import { objectUpdateReducer } from "./detectedObjectUpdate";
import { mapCenterReducer } from "./mapCenterReducer";
import { clusteringUsersReducer } from "./clusteringUsersReducer";

export const rootReducer = combineReducers(
    {
        operation: operationReducer,
        activeOperation: activeOperationReducer,
        detectedObjects: detectedObjectReducer,
        cycles: cyclesReducer,
        pages: pagesReducer,
        auth: authReducer,
        targetUpdate: targetUpdateReducer,
        objectCreate: objectCreateReducer,
        objectUpdate: objectUpdateReducer,
        mapCenter: mapCenterReducer,
        clusteringUsers: clusteringUsersReducer,
    }
)

export type RootState = ReturnType<typeof rootReducer>;