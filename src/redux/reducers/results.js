import { SET_RESULTS } from "../action/results"

export function results (state = {
    totalMaterials : 0,
    totalMaintenanceFees : 0,
    totalLabor : 0
}, action) {
    switch(action.type) {
        case SET_RESULTS:
            return {...state, state: action.object}

        default:
            return state
    }
}