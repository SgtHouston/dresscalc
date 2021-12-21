import { SET_PACKAGING } from "../action/packaging"

export function packaging (state = {
    GarmentBags : 10,
    TagsPinsBoxes : 5
}, action) {
    switch(action.type) {
        case SET_PACKAGING:
            return action.object
        
        default:
            return state
    }
}

