export const SET_LABORHOURS = 'SET_LABORHOURS'

// set labor hours
export function actionSetLaborHours(object) {
    return {
        type: SET_LABORHOURS,
        object
    }
}