import { SET_MAINTENANCEFEES } from "../action/maintenancefees";

export function maintenancefees (state = {
    SewingMachineMaintFee : 30,
    ShopMaintUtilFee : 30
}, action) {
    switch(action.type) {
        case SET_MAINTENANCEFEES:
            return action.object
        
        default:
            return state
    }
}