import { SET_LABORHOURS } from "../action/laborhours";

export function laborhours (state = {
    SewingHrs : 0,
    PatternHrs : 0,
    CuttingHrs : 0,
    AppliqueHrs : 0,
    SewingPriceHr: 65,
    PatternPriceHr : 50,
    CuttingPriceHr : 20,
    AppliquePriceHr : 75
}, action) {
    switch(action.type) {
        case SET_LABORHOURS:
            return action.object
        
        default:
            return state
    }
}