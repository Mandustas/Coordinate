export interface CyclesState {
    cycles: any[];
    loading: boolean;
    error: null | string;
}

export enum CyclesActionTypes {
    FETCH_CYCLES = 'FETCH_CYCLES',
    FETCH_CYCLES_SUCCESS = 'FETCH_CYCLES_SUCCESS',
    FETCH_CYCLES_ERROR = 'FETCH_CYCLES_ERROR',
}

interface FetchCyclesAction{
    type: CyclesActionTypes.FETCH_CYCLES;
}
interface FetchCyclesSuccessAction{
    type: CyclesActionTypes.FETCH_CYCLES_SUCCESS;
    payloadCycles: any[];
}
interface FetchCyclesErrorAction{
    type: CyclesActionTypes.FETCH_CYCLES_ERROR;
    payload: string;
}

export type CycleAction = FetchCyclesAction | FetchCyclesSuccessAction | FetchCyclesErrorAction

