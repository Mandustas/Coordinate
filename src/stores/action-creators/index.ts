import * as OperationActionCreators from './operation'
import * as ActiveOperationActionCreators from './activeOperation'
import * as DetectedObjectsActionCreators from './detectedObjects'
import * as CyclesActionCreators from './cycles'
import * as PagesActionCreators from './pages'
import * as AuthActionCreators from './auth'
import * as TargetUpdateActionCreators from './targetUpdate'
import * as ObjectCreateActionCreators from './objectCreate'
import * as ObjectUpdateActionCreators from './detectedObjectUpdate'
import * as MapCenterActionCreators from './mapCenter'

export default {
    ...OperationActionCreators,
    ...ActiveOperationActionCreators,
    ...DetectedObjectsActionCreators,
    ...CyclesActionCreators,
    ...PagesActionCreators,
    ...AuthActionCreators,
    ...TargetUpdateActionCreators,
    ...ObjectCreateActionCreators,
    ...ObjectUpdateActionCreators,
    ...MapCenterActionCreators,
}
