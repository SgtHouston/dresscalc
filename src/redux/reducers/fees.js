import { SET_FEES } from "../action/fees"

export function fees (state = {
    StateTax : 0.04,
    Processing : 0.029
}, action) {
    switch(action.type) {
        case SET_FEES:
            return action.object

        default:
            return state
    }
}